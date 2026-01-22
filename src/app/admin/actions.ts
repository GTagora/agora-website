'use server';

import { supabaseAdmin } from '@/lib/supabaseAdmin';
import { revalidatePath } from 'next/cache';

export async function submitArticle(prevState: any, formData: FormData) {
  try {
    const title = formData.get('title') as string;
    const author = formData.get('author') as string;
    const slug = formData.get('slug') as string;
    const issueSlug = formData.get('issueSlug') as string;
    let genre = formData.get('genre') as string;
    if (genre === 'Custom') {
      genre = formData.get('genre_custom') as string;
    }
    const date = formData.get('date') as string;
    const excerpt = formData.get('excerpt') as string;
    const content = formData.get('content') as string;
    const imageCredit = formData.get('imageCredit') as string;
    const isPublished = formData.get('isPublished') === 'on';

    const file = formData.get('coverImage') as File;
    let imageUrl = '';

    // 1. Upload Image if present
    if (file && file.size > 0) {
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const fileExt = file.name.split('.').pop();
      const fileName = `${slug}-${Date.now()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { data: uploadData, error: uploadError } = await supabaseAdmin.storage
        .from('article-images')
        .upload(filePath, buffer, {
          contentType: file.type,
          upsert: true,
        });

      if (uploadError) {
        console.error('Upload Error:', uploadError);
        return { message: `Image upload failed: ${uploadError.message}`, success: false };
      }

      // Get Public URL
      const { data: publicUrlData } = supabaseAdmin.storage
        .from('article-images')
        .getPublicUrl(filePath);
      
      imageUrl = publicUrlData.publicUrl;
    }

    // 2. Insert Article
    const { error: insertError } = await supabaseAdmin
      .from('articles')
      .upsert({
        slug,
        issue_slug: issueSlug,
        genre,
        title,
        author,
        published_at: date ? new Date(date).toISOString() : null,
        excerpt,
        content,
        image_url: imageUrl,
        image_credit: imageCredit,
        is_published: isPublished,
      });

    if (insertError) {
      console.error('Database Error:', insertError);
      return { message: `Database error: ${insertError.message}`, success: false };
    }

    revalidatePath('/admin');
    return { message: 'Article submitted successfully!', success: true };

  } catch (e: any) {
    console.error('Server Error:', e);
    return { message: `Server error: ${e.message}`, success: false };
  }
}
