---
layout: page
title: マルチコメントビューア
description: "色んな配信サイトのコメントを取得できるコメントビューアです"
keywords: "コメビュ, コメントビューア, コメントビューワ,MCV,MultiCommentViewer"
author: ryu-s
permalink: app/multicommentviewer
sitemap:
    priority: 1.0
    changefreq: 'weekly'	
---

色んな配信サイトのコメントを取得できるコメントビューアです。  
現在対応しているのは
- YouTubeLive
- Twitch
- ニコ生
- Twicas
- OPENREC
- LINELIVE
- ふわっち
- Mirrativ
- Periscope
- SHOWROOM

また、今後以下のサイトも対応予定です
- Mixer

導入方法は[こちら](https://github.com/CommentViewerCollection/MultiCommentViewer/wiki/%E5%B0%8E%E5%85%A5%E6%89%8B%E9%A0%86)から  
  
バグを見つけたり、追加して欲しい機能があったらTwitter（[@kv510k](https://twitter.com/kv510k)）にリプかDMしてください。時間がある時に対応します。  

## 安定版
[v0.5.3](http://int-main.net/app/MultiCommentViewer_v0.5.3.zip)（2019/10/26）  
主な変更点
- 登録したコテハンが消えてしまう場合がある不具合を修正
- Periscopeとの接続が意図せず切断された場合に自動的に再接続するようにした
- SHOWROOMとの接続が意図せず切断された場合に自動的に再接続するようにした
- ニコ生コメント取得時にコメジェネに「0コメ」と表示されてしまう問題を修正
- YouTubeLiveのメタデータ取得時の不具合を修正

## ベータ版
[v0.5.5](http://int-main.net/app/MultiCommentViewer_Beta_v0.5.5.zip)（2019/11/06）  
主な変更点
- Mixerのコメントをコメジェネに表示できるようにした
- 「表示する情報のレベル」が正常に復元されない問題を修正
- Mixerのwebsocketのデータの変換に失敗する場合があったため修正
