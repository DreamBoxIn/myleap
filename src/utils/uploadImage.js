import { supabase } from './supabaseClient';

export const uploadImage = async (file, user) => {
  const fileName = `${Date.now()}_${file.name}`;
  
  // Subir imagen al bucket de Supabase
  const { data: uploadData, error: uploadError } = await supabase.storage
    .from('images')
    .upload(fileName, file);

  if (uploadError) {
    throw uploadError;
  }

  // Obtener la URL pública de la imagen
  const { publicURL, error: publicUrlError } = supabase
    .storage
    .from('images')
    .getPublicUrl(fileName);

  if (publicUrlError) {
    throw publicUrlError;
  }

  // Guardar la información del usuario y la URL de la imagen en la tabla
  const { data: insertData, error: insertError } = await supabase
    .from('user_images')
    .insert([
      { user_id: user.email, image_url: publicURL, uploaded_at: new Date() }
    ]);

  if (insertError) {
    throw insertError;
  }

  return publicURL;
};