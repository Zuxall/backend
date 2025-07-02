-- Schema SQL for Back-Office Wacdo
-- Creation of tables and relationships

CREATE DATABASE IF NOT EXISTS wacdo CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE wacdo;

-- 1. role
CREATE TABLE IF NOT EXISTS role (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(50) NOT NULL UNIQUE
);

-- 2. utilisateur
CREATE TABLE IF NOT EXISTS utilisateur (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
  mot_de_passe VARCHAR(255) NOT NULL,
  role_id INT,
  CONSTRAINT fk_utilisateur_role FOREIGN KEY (role_id)
    REFERENCES role(id)
    ON DELETE SET NULL
    ON UPDATE CASCADE
);

-- 3. produit
CREATE TABLE IF NOT EXISTS produit (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(100) NOT NULL,
  description TEXT,
  prix DECIMAL(10,2) NOT NULL,
  disponible BOOLEAN DEFAULT TRUE,
  image_url VARCHAR(255)
);

-- 4. menu
CREATE TABLE IF NOT EXISTS menu (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(100) NOT NULL,
  description TEXT
);

-- 5. menu_produit (association table)
CREATE TABLE IF NOT EXISTS menu_produit (
  menu_id INT NOT NULL,
  produit_id INT NOT NULL,
  PRIMARY KEY (menu_id, produit_id),
  CONSTRAINT fk_mp_menu FOREIGN KEY (menu_id)
    REFERENCES menu(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT fk_mp_produit FOREIGN KEY (produit_id)
    REFERENCES produit(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

-- 6. commande
CREATE TABLE IF NOT EXISTS commande (
  id INT AUTO_INCREMENT PRIMARY KEY,
  date_creation DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  statut ENUM('créée','préparée','livrée') NOT NULL DEFAULT 'créée',
  utilisateur_id INT NOT NULL,
  CONSTRAINT fk_cmd_utilisateur FOREIGN KEY (utilisateur_id)
    REFERENCES utilisateur(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);
