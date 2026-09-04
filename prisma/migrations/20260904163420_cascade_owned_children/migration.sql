-- DropForeignKey
ALTER TABLE "DishTag" DROP CONSTRAINT "DishTag_dishId_fkey";

-- DropForeignKey
ALTER TABLE "DishTag" DROP CONSTRAINT "DishTag_tagId_fkey";

-- DropForeignKey
ALTER TABLE "LocationPicture" DROP CONSTRAINT "LocationPicture_locationId_fkey";

-- DropForeignKey
ALTER TABLE "LocationTag" DROP CONSTRAINT "LocationTag_locationId_fkey";

-- DropForeignKey
ALTER TABLE "LocationTag" DROP CONSTRAINT "LocationTag_tagId_fkey";

-- DropForeignKey
ALTER TABLE "RatingPicture" DROP CONSTRAINT "RatingPicture_ratingId_fkey";

-- DropForeignKey
ALTER TABLE "RatingTag" DROP CONSTRAINT "RatingTag_ratingId_fkey";

-- DropForeignKey
ALTER TABLE "RatingTag" DROP CONSTRAINT "RatingTag_tagId_fkey";

-- DropForeignKey
ALTER TABLE "ReviewPicture" DROP CONSTRAINT "ReviewPicture_reviewId_fkey";

-- DropForeignKey
ALTER TABLE "ReviewTag" DROP CONSTRAINT "ReviewTag_reviewId_fkey";

-- DropForeignKey
ALTER TABLE "ReviewTag" DROP CONSTRAINT "ReviewTag_tagId_fkey";

-- AddForeignKey
ALTER TABLE "LocationTag" ADD CONSTRAINT "LocationTag_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LocationTag" ADD CONSTRAINT "LocationTag_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DishTag" ADD CONSTRAINT "DishTag_dishId_fkey" FOREIGN KEY ("dishId") REFERENCES "Dish"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DishTag" ADD CONSTRAINT "DishTag_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RatingTag" ADD CONSTRAINT "RatingTag_ratingId_fkey" FOREIGN KEY ("ratingId") REFERENCES "Rating"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RatingTag" ADD CONSTRAINT "RatingTag_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReviewTag" ADD CONSTRAINT "ReviewTag_reviewId_fkey" FOREIGN KEY ("reviewId") REFERENCES "Review"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReviewTag" ADD CONSTRAINT "ReviewTag_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LocationPicture" ADD CONSTRAINT "LocationPicture_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RatingPicture" ADD CONSTRAINT "RatingPicture_ratingId_fkey" FOREIGN KEY ("ratingId") REFERENCES "Rating"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReviewPicture" ADD CONSTRAINT "ReviewPicture_reviewId_fkey" FOREIGN KEY ("reviewId") REFERENCES "Review"("id") ON DELETE CASCADE ON UPDATE CASCADE;
