# Dra. Evelyne Borges de Mattos

Site institucional desenvolvido para a **Dra. Evelyne Borges de Mattos**, com foco em uma apresentação elegante, moderna e responsiva.

🌐 **Produção:** [draevelyneborgesdemattos.com.br](https://draevelyneborgesdemattos.com.br/)

## Sobre o projeto

Projeto real desenvolvido para apresentar a trajetória profissional, a formação e os procedimentos oferecidos pela Dra. Evelyne Borges de Mattos.

O site foi construído como uma aplicação front-end estática, priorizando:

- Responsividade
- Desempenho
- Acessibilidade
- Experiência do usuário
- Clareza e organização do conteúdo
- Apresentação interativa da formação e dos procedimentos
- Facilidade de contato
- Identidade visual alinhada à profissional

## Funcionalidades

- Layout totalmente responsivo
- Apresentação da trajetória profissional
- Linha do tempo de formação
- Exibição interativa dos procedimentos
- Integração com canais de contato
- Seções institucionais
- Deploy automatizado a cada atualização da branch principal

## Tecnologias

- React
- Vite
- Tailwind CSS
- JavaScript
- GitHub Actions
- AWS Identity and Access Management — IAM
- Amazon S3
- Amazon CloudFront

## Infraestrutura

O front-end é gerado como uma aplicação estática e publicado utilizando serviços da AWS.

- **Amazon S3:** armazenamento e hospedagem dos arquivos estáticos
- **Amazon CloudFront:** distribuição do conteúdo, cache e entrega por CDN
- **AWS IAM:** controle de acesso e autorização segura da pipeline de deploy

## CI/CD

O projeto possui uma pipeline de integração e entrega contínuas configurada com **GitHub Actions**.

A cada push realizado na branch `main`, o fluxo de deploy:

1. Baixa o código do repositório
2. Configura o ambiente Node.js
3. Instala as dependências
4. Gera o build de produção
5. Autentica na AWS por meio de uma role do IAM
6. Sincroniza os arquivos gerados com o Amazon S3
7. Invalida o cache da distribuição do Amazon CloudFront

A autenticação entre o GitHub Actions e a AWS utiliza **OpenID Connect — OIDC**, dispensando o armazenamento de chaves de acesso permanentes no repositório.

## Autoria

Projeto desenvolvido e mantido por **Gustavo Coimbra**.

Este repositório é disponibilizado publicamente exclusivamente para fins de portfólio e demonstração técnica.

## Licença

**Todos os direitos reservados.**

Este projeto não possui licença de código aberto.

Não é permitida a utilização, cópia, reprodução, modificação, distribuição, comercialização ou criação de trabalhos derivados deste código, total ou parcialmente, sem autorização prévia e expressa por escrito do autor.

Os textos, imagens, marcas, identidade visual e demais conteúdos relacionados à Dra. Evelyne Borges de Mattos pertencem aos seus respectivos titulares e também não podem ser reutilizados sem autorização.

## Screenshot

<img
  width="100%"
  height="auto"
  alt="Página inicial do site da Dra. Evelyne Borges de Mattos"
  src="https://github.com/user-attachments/assets/e9e73803-03eb-4574-9bcc-60d34bccbe55"
/>
