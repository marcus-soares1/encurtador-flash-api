-- CreateTable
CREATE TABLE "shortedLinks" (
    "short_link" TEXT NOT NULL,
    "original_link" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "user_id" UUID,
    "expiration_date" TIMESTAMP(3),
    "clicks_count" INTEGER NOT NULL DEFAULT 0,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "shortedLinks_pkey" PRIMARY KEY ("short_link")
);

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "shortedLinks" ADD CONSTRAINT "shortedLinks_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
