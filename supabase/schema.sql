-- RunDeal V0.6 — schéma minimal Supabase/PostgreSQL
create extension if not exists pgcrypto;

create table if not exists retailers (
  id bigserial primary key,
  slug text not null unique,
  name text not null,
  affiliate_network text,
  affiliate_enabled boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists shoe_models (
  id bigserial primary key,
  family_slug text not null,
  brand text not null,
  name text not null,
  generation text not null default 'N',
  active boolean not null default true,
  terrain jsonb not null default '["route"]'::jsonb,
  levels jsonb not null default '["occasionnel","regulier"]'::jsonb,
  uses jsonb not null default '["daily"]'::jsonb,
  drop_mm numeric,
  weight_g numeric,
  cushion text,
  foam_name text,
  foam_feel text,
  carbon_plate boolean not null default false,
  launch_price numeric,
  launch_price_verified boolean not null default false,
  source_url text,
  review_points jsonb not null default '[]'::jsonb,
  athlete_note text,
  expert_score numeric,
  community_score numeric,
  updated_at timestamptz not null default now(),
  unique(brand,name,generation)
);

create table if not exists merchant_products (
  id bigserial primary key,
  retailer_id bigint not null references retailers(id) on delete cascade,
  external_id text not null,
  title text not null,
  brand text,
  ean text,
  size_eu text,
  product_url text,
  image_url text,
  availability text,
  raw jsonb,
  last_seen_at timestamptz not null default now(),
  unique(retailer_id,external_id)
);

create table if not exists product_matches (
  id bigserial primary key,
  merchant_product_id bigint not null references merchant_products(id) on delete cascade,
  shoe_id bigint not null references shoe_models(id) on delete cascade,
  confidence numeric not null default 0,
  approved boolean not null default false,
  matched_by text not null default 'manual',
  unique(merchant_product_id)
);

create table if not exists offers (
  id bigserial primary key,
  shoe_id bigint not null references shoe_models(id) on delete cascade,
  retailer_id bigint not null references retailers(id) on delete cascade,
  merchant_product_id bigint references merchant_products(id) on delete set null,
  size_eu text,
  price numeric not null,
  list_price numeric,
  product_url text,
  active boolean not null default true,
  checked_at timestamptz not null default now(),
  unique(merchant_product_id,size_eu)
);

create table if not exists price_history (
  id bigserial primary key,
  shoe_id bigint not null references shoe_models(id) on delete cascade,
  retailer_id bigint not null references retailers(id) on delete cascade,
  size_eu text,
  price numeric not null,
  observed_at timestamptz not null default now()
);
create index if not exists price_history_lookup on price_history(shoe_id,size_eu,observed_at desc);

create table if not exists community_feedback (
  id uuid primary key default gen_random_uuid(),
  shoe_id bigint references shoe_models(id) on delete set null,
  shoe_name text not null,
  canonical text,
  level text,
  weight_band text,
  distance_km numeric,
  sentiment text,
  feedback jsonb not null default '[]'::jsonb,
  uses jsonb not null default '[]'::jsonb,
  source text not null default 'USER_DECLARED',
  created_at timestamptz not null default now()
);

-- Le front ne parle pas directement à ces tables : les écritures passent par /api.
alter table community_feedback enable row level security;
alter table offers enable row level security;
alter table price_history enable row level security;
alter table merchant_products enable row level security;
alter table product_matches enable row level security;

-- Important V0.6 : aucune donnée récupérée via l’API Strava n’est écrite dans ces tables.
