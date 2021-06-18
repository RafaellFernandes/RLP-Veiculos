-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 17-Jun-2021 às 05:29
-- Versão do servidor: 10.4.19-MariaDB
-- versão do PHP: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `rlpveiculos`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `cores`
--

CREATE TABLE `cores` (
  `id` int(11) NOT NULL,
  `cor` varchar(50) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `cores`
--

INSERT INTO `cores` (`id`, `cor`, `createdAt`, `updatedAt`) VALUES
(1, 'prata', '2021-06-16 23:41:11', '2021-06-16 23:44:07'),
(2, 'preto', '2021-06-16 23:41:21', '2021-06-16 23:44:12'),
(3, 'branco', '2021-06-16 23:43:43', '2021-06-16 23:44:18'),
(4, 'vermelho', '2021-06-16 23:43:45', '2021-06-16 23:44:24');

-- --------------------------------------------------------

--
-- Estrutura da tabela `marcas`
--

CREATE TABLE `marcas` (
  `id` int(11) NOT NULL,
  `marca` varchar(50) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `marcas`
--

INSERT INTO `marcas` (`id`, `marca`, `createdAt`, `updatedAt`) VALUES
(1, 'bmw', '2021-06-16 23:41:31', '2021-06-16 23:42:03'),
(2, 'toyota', '2021-06-16 23:42:18', '2021-06-16 23:42:48'),
(3, 'honda', '2021-06-16 23:42:21', '2021-06-16 23:42:53'),
(4, 'ford', '2021-06-16 23:42:24', '2021-06-16 23:43:01'),
(5, 'fiat', '2021-06-16 23:42:27', '2021-06-16 23:43:07'),
(6, 'chevrolet', '2021-06-16 23:42:33', '2021-06-16 23:43:23');

-- --------------------------------------------------------

--
-- Estrutura da tabela `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20210607225249-usuarios.js'),
('20210612012242-cores.js'),
('20210612012300-marcas.js'),
('20210612012307-veiculos.js');

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `login` varchar(20) NOT NULL,
  `senha` varchar(100) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `usuarios`
--

INSERT INTO `usuarios` (`id`, `nome`, `login`, `senha`, `createdAt`, `updatedAt`) VALUES
(1, 'Administrador', 'admin', '$2a$10$CLPt3sGSlCj4YIkKOckzoeztuTk.sTs4bm1ITQZC6X4/zjiWNwSAm', '2021-06-16 23:40:19', '2021-06-16 23:40:19'),
(2, 'teste', 'usuario', '$2a$10$LgulXpE75mQ0Kobyl2LQnuuWbJ2TnvsW4GG70QCXv3/hPJ0MVSJMm', '2021-06-16 23:40:37', '2021-06-16 23:40:37');

-- --------------------------------------------------------

--
-- Estrutura da tabela `veiculos`
--

CREATE TABLE `veiculos` (
  `id` int(11) NOT NULL,
  `modelo` varchar(50) NOT NULL,
  `ano_modelo` int(4) DEFAULT NULL,
  `ano_fabricacao` int(4) DEFAULT NULL,
  `valor` double NOT NULL,
  `tipo` varchar(8) NOT NULL,
  `foto_destaque` varchar(50) DEFAULT NULL,
  `marca_id` int(11) NOT NULL,
  `cor_id` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  `opcionais` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `veiculos`
--

INSERT INTO `veiculos` (`id`, `modelo`, `ano_modelo`, `ano_fabricacao`, `valor`, `tipo`, `foto_destaque`, `marca_id`, `cor_id`, `usuario_id`, `opcionais`, `createdAt`, `updatedAt`) VALUES
(1, 'onix', 2015, 2017, 50000, 'seminovo', '14.jpg', 6, 1, 1, '', '2021-06-16 23:57:01', '2021-06-16 23:57:01'),
(2, 'uno', 2005, 2008, 25000, 'seminovo', '13.jpg', 5, 4, 1, '', '2021-06-17 00:26:21', '2021-06-17 00:26:21'),
(3, 'toro', 2019, 2020, 200000, 'novo', '7.jpg', 5, 2, 1, '', '2021-06-17 00:29:44', '2021-06-17 00:51:55'),
(4, 's10', 2020, 2021, 200000, 'novo', '5.jpg', 6, 3, 1, '', '2021-06-17 00:30:54', '2021-06-17 00:30:54'),
(5, 'cross fox', 2005, 2009, 40000, 'seminovo', '2.jpg', 6, 2, 1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat ligula non malesuada faucibus.', '2021-06-17 00:39:58', '2021-06-17 00:53:52'),
(6, 'civic', 2010, 2012, 50000, 'seminovo', '8.jpg', 3, 1, 1, '', '2021-06-17 00:40:44', '2021-06-17 00:54:03'),
(7, 'gol', 2010, 2013, 35000, 'seminovo', '6.jpg', 2, 3, 1, '', '2021-06-17 00:55:21', '2021-06-17 00:55:21'),
(8, 'palio', 2019, 2020, 55000, 'seminovo', '4.jpg', 5, 2, 1, '', '2021-06-17 00:56:17', '2021-06-17 00:56:17'),
(9, 'celta', 2003, 2006, 33000, 'seminovo', '3.jpg', 2, 4, 1, '', '2021-06-17 00:57:28', '2021-06-17 00:57:28'),
(10, 'hb20', 2018, 2021, 60000, 'novo', '10.jpg', 4, 3, 1, '', '2021-06-17 00:58:55', '2021-06-17 00:58:55');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `cores`
--
ALTER TABLE `cores`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `marcas`
--
ALTER TABLE `marcas`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Índices para tabela `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `veiculos`
--
ALTER TABLE `veiculos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `marca_id` (`marca_id`),
  ADD KEY `cor_id` (`cor_id`),
  ADD KEY `usuario_id` (`usuario_id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `cores`
--
ALTER TABLE `cores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `marcas`
--
ALTER TABLE `marcas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de tabela `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `veiculos`
--
ALTER TABLE `veiculos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `veiculos`
--
ALTER TABLE `veiculos`
  ADD CONSTRAINT `veiculos_ibfk_1` FOREIGN KEY (`marca_id`) REFERENCES `marcas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `veiculos_ibfk_2` FOREIGN KEY (`cor_id`) REFERENCES `cores` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `veiculos_ibfk_3` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
