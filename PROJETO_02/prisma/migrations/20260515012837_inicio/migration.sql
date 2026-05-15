-- CreateTable
CREATE TABLE `tbl_contatos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(80) NOT NULL,
    `cpf` VARCHAR(18) NOT NULL,
    `email` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `tbl_contatos_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
