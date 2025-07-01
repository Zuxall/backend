-- Création des tables selon spécifications

CREATE TABLE role (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE utilisateur (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(100) NOT NULL,
  email VARCHAR(150) UNIQUE NOT NULL,
  mot_de_passe VARCHAR(255) NOT NULL,
  role_id INT NOT NULL,
  FOREIGN KEY (role_id) REFERENCES role(id)
);

CREATE TABLE produit (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(100) NOT NULL,
  description TEXT,
  prix DECIMAL(10,2) NOT NULL,
  disponible BOOLEAN DEFAULT TRUE,
  image_url VARCHAR(255)
);

CREATE TABLE menu (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(100) NOT NULL,
  description TEXT
);

CREATE TABLE menu_produit (
  menu_id INT,
  produit_id INT,
  PRIMARY KEY (menu_id, produit_id),
  FOREIGN KEY (menu_id)   REFERENCES menu(id),
  FOREIGN KEY (produit_id) REFERENCES produit(id)
);

CREATE TABLE commande (
  id INT AUTO_INCREMENT PRIMARY KEY,
  date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  statut ENUM('créée','préparée','livrée') DEFAULT 'créée',
  utilisateur_id INT,
  FOREIGN KEY (utilisateur_id) REFERENCES utilisateur(id)
);
