import React from "react";
import "./portfolio.css"
import PlatePortfolio from "./platePortfolio";
import nba1 from "../../images/nba.jpg"
import musicShelf1 from "../../images/musicShelf1.png"
import musicShelf2 from "../../images/musicShelf2.png"


const Portfolio = () => {
    return(
        <div>
        <h1 className="title">PORTFOLIO</h1>
        <ul className="portfolioList">
            <li><PlatePortfolio photo1={musicShelf1} photo2={musicShelf2} title='ミュージックシェルフ' english='MUSIC SHELF' >　初めてハッカソンに参加した際に、作ったwebページです。普段聞いている音楽を本棚のように収納し、他の人と共有することができるアプリです。とはいっても完成まではいかずに終わってしまいました。GitとDockerを用いてチーム開発をし言語はDjangoを使用しました。僕は主にフロントエンドを担当しました。本棚っぽい知的な雰囲気を出しながらわかりやすいUIを意識しました。環境構築に時間がかかり動くものは作れませんでしたが学ぶことがたくさんあって非常にいい経験でした。またタイミングが合えばハッカソンに出場して今度は開発まで持っていきたいです。</PlatePortfolio></li>
        </ul>
        </div>
    )
}
export default Portfolio;