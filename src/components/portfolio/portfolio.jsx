import React from "react";
import "./portfolio.css"
import PlatePortfolio from "./platePortfolio";
import musicShelf1 from "../../images/musicShelf1.png"
import musicShelf2 from "../../images/musicShelf2.png"
import myPage1 from "../../images/myPage1.png"
import myPage2 from "../../images/myPage2.png"
import going1 from "../../images/going1.png"; 
import going2 from "../../images/going2.png";
import dataAnalytics1 from "../../images/dataAnalytics1.png"; 
import dataAnalytics2 from "../../images/dataAnalytics2.png"; 

const Portfolio = () => {
    return(
        <div>
        <h1 className="title">PORTFOLIO</h1>
        <ul className="portfolioList">
            <li><PlatePortfolio photo1={myPage1} photo2={myPage2} title='マイページ' english='MY PAGE'>　初めて自主的に作った作品です。今までフロントエンドは全く触れてこなかったのでとても大変でしたが独学で頑張りました。なるべく見やすいサイトを目指して作っていたので割と満足しています。フレームワークとしてReactを用い、Javascriptでコーディングをしました。複雑な機能はこれから実装するつもりですがとりあえずuseState等を使って動くところを作れたので良かったです。まだPC版にしか対応していないためスマホ等でもちゃんと見れるように改良していきたいです。</PlatePortfolio></li> 
            <li><PlatePortfolio photo1={musicShelf1} photo2={musicShelf2} title='ミュージックシェルフ' english='MUSIC SHELF' >　初めてハッカソンに参加した際に、作ったwebページです。普段聞いている音楽を本棚のように収納し、他の人と共有することができるアプリです。とはいっても完成まではいかずに終わってしまいました。GitとDockerを用いてチーム開発をし言語はDjangoを使用しました。僕は主にフロントエンドを担当しました。本棚っぽい知的な雰囲気を出しながらもわかりやすいUIを意識しました。環境構築に時間がかかり動くものは作れませんでしたが学ぶことがたくさんあって非常にいい経験でした。</PlatePortfolio></li>
            <li><PlatePortfolio photo1={going1} photo2={going2} title='ゴーイング' english='Going' >　ドコモハッカソンに参加した時に作ったWEBページです。旅行先のスキマ時間で観光できるスポットを提案してくれるアプリケーションです。AWSを用いてフロントエンドはReact、バックエンドはFlaskで開発しました。バックエンドでは生成AIのAPIを用いています。私はフロントエンドの開発と、フロントエンドとバックエンドをつなぐ部分を担当しました。APIを用いた開発は初めてでとてもいい経験ができたと思います。AWSの権限の問題からうまく動くませんが以下のURLから飛ぶことができます。<br /><a href="https://presentation-3.d3pgz21o8eeau4.amplifyapp.com/" target="_blank" rel="noopener noreferrer">Going</a></PlatePortfolio></li>
            <li><PlatePortfolio photo1={dataAnalytics1} photo2={dataAnalytics2} title='データアナリティクス' english='Data Analytics' >　データ解析に興味があったため自主的に、Couseraというオンライン学習サイトでGoogleが提供しているデータアナリティクスコースを修了しました。SQLやR言語、ビジュアライゼーションについて学ぶことができ、初めてのことが多くこのコースを通して成長することができたと思います。結構なボリュームで約１年ほどかかってしまいましたがやり遂げられたので良かったです。右の画像はすべてのコースを修了した者に送られる賞状です。デジタルとはいえ賞状は貰うとやはり嬉しいですね（笑）</PlatePortfolio></li>
        </ul>
        </div>
    )
}
export default Portfolio;