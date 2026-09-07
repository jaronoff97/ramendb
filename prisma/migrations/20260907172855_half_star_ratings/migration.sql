-- AlterTable
ALTER TABLE "Rating" ALTER COLUMN "value" SET DEFAULT 0,
ALTER COLUMN "value" SET DATA TYPE DOUBLE PRECISION;


-- Whole stars stay whole; the column simply allows halves now. The constraint
-- is what keeps 3.7 out, since prisma has no way to express it in the schema.
ALTER TABLE "Rating"
  ADD CONSTRAINT "Rating_value_half_star"
  CHECK ("value" >= 0 AND "value" <= 5 AND ("value" * 2) = floor("value" * 2));
