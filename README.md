# ClipPilot — instaladores oficiais

Este repositório guarda **apenas os instaladores** do ClipPilot. Não há código-fonte aqui.

## Baixar

A versão mais recente está em **[Releases](../../releases/latest)** — baixe o arquivo
`ClipPilot-Setup-<versão>.exe`.

> **Aviso do Windows na instalação.** O instalador ainda não é assinado com certificado,
> então o SmartScreen mostra "o Windows protegeu o seu computador". Clique em
> **Mais informações → Executar assim mesmo**. Isso será resolvido com a compra do
> certificado de assinatura.

## Atualização automática

Depois de instalado, o ClipPilot procura versões novas sozinho e instala quando você
fecha o aplicativo. Você não precisa voltar aqui: baixar o instalador de novo só é
necessário na primeira instalação.

Isso pode ser desligado em **Configurações → Sistema**.

## Os três arquivos de cada versão

| Arquivo | Para que serve |
|---|---|
| `ClipPilot-Setup-<versão>.exe` | O instalador |
| `latest.yml` | Anuncia a versão. É por ele que o aplicativo descobre que existe algo novo |
| `ClipPilot-Setup-<versão>.exe.blockmap` | Permite baixar só as partes que mudaram, em vez do instalador inteiro |

Os três precisam estar presentes. Sem o `latest.yml`, nenhum aplicativo instalado
descobre a versão nova — e não aparece erro em lugar nenhum.
