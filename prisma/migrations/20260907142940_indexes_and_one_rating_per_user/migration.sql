-- CreateIndex
CREATE INDEX "Dish_locationId_idx" ON "Dish"("locationId");

-- CreateIndex
CREATE INDEX "DishTag_tagId_idx" ON "DishTag"("tagId");

-- CreateIndex
CREATE INDEX "LocationPicture_locationId_idx" ON "LocationPicture"("locationId");

-- CreateIndex
CREATE INDEX "LocationTag_tagId_idx" ON "LocationTag"("tagId");

-- CreateIndex
CREATE INDEX "Rating_locationId_idx" ON "Rating"("locationId");

-- CreateIndex
CREATE UNIQUE INDEX "Rating_userId_locationId_key" ON "Rating"("userId", "locationId");

-- CreateIndex
CREATE INDEX "RatingPicture_ratingId_idx" ON "RatingPicture"("ratingId");

-- CreateIndex
CREATE INDEX "RatingTag_tagId_idx" ON "RatingTag"("tagId");

-- CreateIndex
CREATE INDEX "Review_locationId_idx" ON "Review"("locationId");

-- CreateIndex
CREATE INDEX "Review_userId_idx" ON "Review"("userId");

-- CreateIndex
CREATE INDEX "Review_ratingId_idx" ON "Review"("ratingId");

-- CreateIndex
CREATE INDEX "Review_createdAt_idx" ON "Review"("createdAt");

-- CreateIndex
CREATE INDEX "ReviewPicture_reviewId_idx" ON "ReviewPicture"("reviewId");

-- CreateIndex
CREATE INDEX "ReviewTag_tagId_idx" ON "ReviewTag"("tagId");

