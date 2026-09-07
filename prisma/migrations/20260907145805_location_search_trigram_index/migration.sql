-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- CreateIndex
CREATE INDEX "Location_name_trgm_idx" ON "Location" USING GIN ("name" gin_trgm_ops);

-- CreateIndex
CREATE INDEX "Location_city_trgm_idx" ON "Location" USING GIN ("city" gin_trgm_ops);

-- CreateIndex
CREATE INDEX "Location_country_trgm_idx" ON "Location" USING GIN ("country" gin_trgm_ops);

