# 🛡️ CyberGuard — Plataforma Educacional de Cibersegurança

> Projeto de Extensão Universitária — 5º Semestre de Análise e Desenvolvimento de Sistemas  
> **UNICIVE** · 2024

---

## 📌 Sobre o Projeto

O **CyberGuard** é uma plataforma web educacional desenvolvida como **Trabalho de Extensão** no curso de Análise e Desenvolvimento de Sistemas da UNICIVE, com foco no tema **Cibersegurança**.

O projeto nasceu da necessidade de democratizar o conhecimento sobre segurança digital — um tema cada vez mais urgente, mas ainda pouco compreendido pela população geral. A plataforma apresenta conteúdos técnicos de forma acessível, interativa e visualmente engajante, abordando desde conceitos fundamentais até análises de ataques reais que mudaram a história da segurança da informação.

---

## 🎯 Objetivos

- Educar usuários sobre as principais ameaças digitais do cenário atual
- Apresentar ferramentas e hábitos práticos de proteção pessoal
- Documentar casos históricos de ataques cibernéticos com análise técnica e impacto geopolítico
- Oferecer recursos interativos como gerador de senhas e checklist de segurança
- Contribuir com a conscientização digital da comunidade

---

## 🔍 Conteúdo Abordado

| Módulo | Descrição |
|--------|-----------|
| 🏠 **Landing Page** | Visão geral das ameaças, estatísticas globais, linha do tempo e pilares de defesa |
| 📖 **O que é Cibersegurança** | Conceitos fundamentais, tríade CIA, riscos reais e práticas essenciais |
| 🔴 **Dossiê de Ataques** | Análise técnica de Stuxnet, Mirai, WannaCry e SolarWinds |
| 🛡️ **Guia de Proteção** | Senhas, MFA, checklist interativo, boas práticas em redes públicas |

---

## ✨ Funcionalidades

- **Gerador de senhas criptograficamente seguro** — 100% client-side, nenhum dado é transmitido
- **Checklist de segurança interativo** com pontuação em tempo real
- **Quiz de conhecimento** com feedback imediato
- **Dossiê técnico** de 4 ataques históricos com anatomia passo a passo
- Interface totalmente **responsiva** para desktop e mobile
- Design imersivo com estética de terminal/hacking

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Finalidade |
|------------|------------|
| **Angular 17+** | Framework principal (SPA com lazy loading) |
| **TypeScript** | Tipagem estática e qualidade de código |
| **SCSS** | Estilização com variáveis CSS e metodologia BEM |
| **HTML5** | Semântica e acessibilidade |
| **Web Crypto API** | Geração segura de senhas no navegador |

---

## 🏗️ Arquitetura do Projeto

O projeto segue as boas práticas de arquitetura Angular com separação clara de responsabilidades:

```
src/app/
├── core/
│   ├── models/          # Interfaces e tipos TypeScript
│   └── data/            # Dados estáticos tipados
├── shared/
│   └── components/      # Componentes reutilizáveis (Navbar, Footer, Button...)
└── features/
    ├── landing/          # Página inicial
    ├── content/          # Conteúdo educacional
    ├── attacks/          # Dossiê de ataques históricos
    └── protection/       # Guia de proteção pessoal
```

**Princípios aplicados:** Lazy Loading, Feature Modules, Shared Module, BEM no SCSS, Single Responsibility, dados separados da lógica de apresentação.

---

## 📊 Por que Cibersegurança?

> *"A cada 39 segundos, um sistema é comprometido em algum lugar do mundo."*

O Brasil é um dos países mais atacados da América Latina. Em 2023:
- **US$ 8,4 trilhões** foi o custo global de crimes cibernéticos
- **82%** das violações envolvem fator humano
- **3,5 milhões** de vagas abertas na área globalmente sem profissionais para preenchê-las

A extensão universitária tem papel fundamental em levar esse conhecimento para além dos muros da faculdade, alcançando a comunidade que mais precisa dele.

---

## 👩‍💻 Autora

**Geovana Paula da Silva**  
Estudante de Análise e Desenvolvimento de Sistemas — 5º Semestre  
UNICIVE — 2026

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/GeoS1lva)

---

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais como trabalho de extensão universitária.

---

*CYBERGUARD — Porque segurança digital não é opcional, é sobrevivência.*
