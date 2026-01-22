'use server';

import { supabaseAdmin } from '@/lib/supabaseAdmin';
import { revalidatePath } from 'next/cache';


export async function submitArticle(prevState: any, formData: FormData) {
  try {
    const id = formData.get("id") as string;
    const title = formData.get("title") as string;
    const author = formData.get("author") as string;
    const slug = formData.get("slug") as string;
    const issueSlug = formData.get("issueSlug") as string;
    let genre = formData.get("genre") as string;
    if (genre === "Custom") {
      genre = formData.get("genre_custom") as string;
    }
    const date = formData.get("date") as string;
    const excerpt = formData.get("excerpt") as string;
    const content = formData.get("content") as string;
    const imageCredit = formData.get("imageCredit") as string;
    const isPublished = formData.get("isPublished") === "on";

    const file = formData.get("coverImage") as File;
    let imageUrl = "";

    // 1. Upload Image if present
    if (file && file.size > 0) {
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const fileExt = file.name.split(".").pop();
      const fileName = `${slug}-${Date.now()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { data: uploadData, error: uploadError } =
        await supabaseAdmin.storage
          .from("article-images")
          .upload(filePath, buffer, {
            contentType: file.type,
            upsert: true,
          });

      if (uploadError) {
        console.error("Upload Error:", uploadError);
        return {
          message: `Image upload failed: ${uploadError.message}`,
          success: false,
        };
      }

      // Get Public URL
      const { data: publicUrlData } = supabaseAdmin.storage
        .from("article-images")
        .getPublicUrl(filePath);

      imageUrl = publicUrlData.publicUrl;
    }

    // 2. Prepare Payload
    const payload: any = {
      slug,
      issue_slug: issueSlug,
      genre,
      title,
      author,
      published_at: date ? new Date(date).toISOString() : null,
      excerpt,
      content,
      image_credit: imageCredit,
      is_published: isPublished,
    };

    if(imageUrl) {
        payload.image_url = imageUrl;
    }
    
    // If we have an ID, add it to payload to strictly update that record
    if (id) {
        payload.id = id;
    }

    // 3. Insert/Upsert Article
    // Note: If ID is present, Supabase upsert will use it to find the record assuming standard uuid PK
    const { error: insertError } = await supabaseAdmin
      .from("articles")
      .upsert(payload);

    if (insertError) {
      console.error("Database Error:", insertError);
      return {
        message: `Database error: ${insertError.message}`,
        success: false,
      };
    }

    revalidatePath("/admin");
    // Also revalidate the article page if it exists
    if(slug) revalidatePath(`/articles/${slug}`);
    
    return { message: "Article submitted successfully!", success: true };
  } catch (e: any) {
    console.error("Server Error:", e);
    return { message: `Server error: ${e.message}`, success: false };
  }
}



export async function deleteArticle(id: string) {
  try {
    const { error } = await supabaseAdmin.from('articles').delete().eq('id', id);
    if (error) throw error;
    
    revalidatePath('/admin');
    return { success: true, message: 'Article deleted successfully' };
  } catch (e: any) {
    console.error("Delete Error:", e);
    return { success: false, message: `Error deleting article: ${e.message}` };
  }
}



export async function publishIssueArticles(issueSlug: string) {
  try {
    const { error } = await supabaseAdmin
      .from("articles")
      .update({ is_published: true })
      .eq("issue_slug", issueSlug);

    if (error) throw error;

    revalidatePath("/admin");
    return { success: true, message: "All articles in issue published successfully" };
  } catch (e: any) {
    console.error("Publish Issue Error:", e);
    return { success: false, message: `Error publishing issue articles: ${e.message}` };
  }
}

export async function updateArticleStatus(id: string, isPublished: boolean) {
  try {
    const { error } = await supabaseAdmin
      .from("articles")
      .update({ is_published: isPublished })
      .eq("id", id);
      
    if (error) throw error;
    
    revalidatePath("/admin");
    return { success: true, message: `Article ${isPublished ? 'published' : 'unpublished'} successfully` };
  } catch (e: any) {
    console.error("Status Update Error:", e);
    return { success: false, message: `Error updating status: ${e.message}` };
  }
}

export async function submitIssue(prevState: any, formData: FormData) {
  const semester = formData.get("semester") as string;
  const theme = formData.get("theme") as string;
  const slug = formData.get("slug") as string;
  const volume = parseInt(formData.get("volume") as string);
  const issue_number = parseInt(formData.get("issue_number") as string);
  const letter_from_eic = formData.get("letter_from_eic") as string;
  const coverImage = formData.get("coverImage") as File;

  let image_url = null;

  try {
     if (coverImage && coverImage.size > 0) {
      if (!coverImage.type.startsWith("image/")) {
        return { message: "Invalid file type. Please upload an image.", success: false };
      }
      
      const arrayBuffer = await coverImage.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const fileExt = coverImage.name.split(".").pop();
      const fileName = `${slug}-cover-${Date.now()}.${fileExt}`;
      const { data: uploadData, error: uploadError } = await supabaseAdmin.storage
        .from("article-images") 
        .upload(`covers/${fileName}`, buffer, {
          contentType: coverImage.type,
          upsert: false,
        });

      if (uploadError) throw uploadError;

      const { data: publicUrlData } = supabaseAdmin.storage
        .from("article-images")
        .getPublicUrl(`covers/${fileName}`);

      image_url = publicUrlData.publicUrl;
    }

    const { error: dbError } = await supabaseAdmin.from("issues").upsert({
       slug,
       semester,
       theme,
       volume,
       issue_number,
       letter_from_eic,
       cover_image_url: image_url
    });

    if (dbError) throw dbError;

    revalidatePath("/admin");
    return { message: "Issue created successfully!", success: true };

  } catch (error: any) {
    console.error("Error submitting issue:", error);
    return { message: `Error: ${error.message}`, success: false };
  }
}

export async function getArticles(issueSlug: string) {
  try {
    const { data, error } = await supabaseAdmin
      .from("articles")
      .select("id, title, slug, author, is_published, issue_slug, published_at")
      .eq("issue_slug", issueSlug)
      .order("created_at", { ascending: false });

    if (error) {
       console.error("Error fetching articles:", error);
       return [];
    }
    return data;
  } catch (e) {
    console.error("Server API Error:", e);
    return [];
  }
}

export async function getIssues() {
  try {
    const { data, error } = await supabaseAdmin
      .from("issues")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
       console.error("Error fetching issues:", error);
       return [];
    }
    return data;
  } catch (e) {
    console.error("Server API Error:", e);
    return [];
  }
}
