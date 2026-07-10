// base-datos-centralizada.js — Proyecto: trytiktok
window.bd = (function () {
  const supabase = window.supabase.createClient(
    window.CONFIG.SUPABASE_URL,
    window.CONFIG.SUPABASE_ANON_KEY
  );

  async function obtenerVelas(timeframe = '1d', limite = 200) {
    const { data, error } = await supabase
      .from('tok_velas')
      .select('*')
      .eq('timeframe', timeframe)
      .order('timestamp_apertura', { ascending: true })
      .limit(limite);
    if (error) { console.error('Error obtenerVelas:', error); return []; }
    return data;
  }

  async function crearOrden(tipo, cantidad, precio, usuarioId = null) {
    const { data, error } = await supabase
      .from('tok_ordenes')
      .insert({
        tipo,
        cantidad_tok: cantidad,
        precio_unitario: precio,
        usuario_id: usuarioId
      })
      .select();
    if (error) { console.error('Error crearOrden:', error); return null; }
    return data[0];
  }

  async function obtenerOrdenes(usuarioId, limite = 50) {
    const { data, error } = await supabase
      .from('tok_ordenes')
      .select('*')
      .eq('usuario_id', usuarioId)
      .order('created_at', { ascending: false })
      .limit(limite);
    if (error) { console.error('Error obtenerOrdenes:', error); return []; }
    return data;
  }

  function suscribirVelasEnVivo(callback) {
    return supabase
      .channel('tok_velas_realtime')
      .on('postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'tok_velas' },
        (payload) => callback(payload.new)
      )
      .subscribe();
  }

  return {
    supabase,
    obtenerVelas,
    crearOrden,
    obtenerOrdenes,
    suscribirVelasEnVivo
  };
})();
