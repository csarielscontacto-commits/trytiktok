// config.js — Proyecto: trytiktok
window.CONFIG = {
  // ===== SUPABASE (EXISTENTE) =====
  SUPABASE_URL: "https://kbrlmeylciwocsxndtvv.supabase.co",
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImticmxtZXlsY2l3b2NzeG5kdHZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM2MzUzNTMsImV4cCI6MjA5OTIxMTM1M30.OwWk3okFUtUAmidKfcJ4Ldf7qRXr201dkwLkWpIzMFU",
  PROYECTO_NOMBRE: "trytiktok",
  REGION: "us-east-2",

  // ===== PRECIOS Y MONEDA (NUEVO) =====
  PRECIO_UNITARIO: 75,        // Pesos mexicanos
  MONEDA: 'MXN',

  // ===== METAS (NUEVO) =====
  METAS: {
    DIARIA: 10000,
    SEMANAL: 70000,
    MENSUAL: 300000
  },

  // ===== TOKEN TOK (NUEVO) =====
  TOK: {
    POR_NFT: 12,                    // TOKs necesarios para 1 NFT
    VALOR_REDENCION: 6.25,          // $6.25 MXN por TOK
    COMISION_PORCENTAJE: 0.01,      // 1%
  },

  // ===== WEB3 / BLOCKCHAIN (NUEVO) =====
  WEB3_REWARDS: {
    CHAIN: {
      ID: 80002,
      HEX_ID: '0x13882',
      NAME: 'Polygon Amoy',
      RPC_URL: 'https://rpc-amoy.polygon.technology',
      EXPLORER: 'https://amoy.polygonscan.com'
    },
    TOKS_UMBRAL_CANJE: 12,
    TOKS_POR_GALLETA: 1,
    REWARD_NFT_ADDRESS: '',          // ← PON AQUÍ TU DIRECCIÓN DEL CONTRATO NFT
    WALLETCONNECT_PROJECT_ID: ''     // ← PON AQUÍ TU PROJECT ID DE WALLETCONNECT
  },

  // ===== CONTRATOS (Trading) (NUEVO) =====
  CONTRATOS: {
    TOK: '0x0000000000000000000000000000000000000000',     // ← PON DIRECCIÓN DEL TOKEN TOK
    PAGO: '0x0000000000000000000000000000000000000000',    // ← PON DIRECCIÓN DEL TOKEN DE PAGO (USDT/USDC)
  },

  // ===== WALLET DE SARIEL'S (NUEVO) =====
  WALLET: {
    USDT_USDC: '0x45c6455aa01356609d96b659c6eb880b7e1d046d', // Dirección para pagos USDT/USDC
  }
};