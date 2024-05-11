import React from "react";
import "./hobby.css"
import PlateHobby from "./plateHobby";
import nba1 from "../../images/nba1.jpg"
import basketball1 from "../../images/basketball1.jpg"
import basketball2 from "../../images/basketball2.jpg"
import nba2 from "../../images/nba2.jpg"
import variety1 from "../../images/variety1.jpg"
import variety2 from "../../images/variety2.jpg"
import music1 from "../../images/music1.jpg"
import music2 from "../../images/music2.jpg"


 function Text() {
    const text = `Hello\nCodeSandbox`
    return (
      <SomeCompoent>{text}</SomeCompoent>
    );
  }
  
  const SomeCompoent = ({children}) => {
    return (
      <div>
        <h1 className="text">{children}</h1>
      </div>
    );
  }


const Hobby = () => {
    return(
        <div>
        <h1 className="title">HOBBY</h1>
        <ul className="hobbyList">
           <li><PlateHobby photo1={basketball1} photo2={basketball2} title='バスケットバール' english='BASKET BALL'>　小学校3年間中学校3年間、高校3年間、大学4年間の計13年間バスケットボールをしていました。なんと人生の半分以上もバスケットボールをしていたらしいです。（笑）大きな身体を使ってゴール下やリバウンドを頑張りチームに貢献しました。3PTシュートは永遠にうまくなりませんでした。（泣）<h4 className="6">主な実績</h4><ul className="basketballAchieve"><li>中学、大学で副キャプテン</li><li>関西学生バスケットボール連盟二部に昇格</li><li>中2で神戸市オールスター選出</li></ul></PlateHobby></li>
           <li><PlateHobby photo1={nba1} photo2={nba2} title='NBA観戦' english ='NBA WATCHING'>　高校2年生の頃からアメリカのプロバスケットボールリーグNBA(National Basketball Asociation)を見始めました。表紙の写真は僕の推しチームHouston Rocketsです。近年は順位が低迷してしまっていますが、いい若手が集まっていて見ていてとても面白いです。年間82試合欠かさず見ています。<br/>　右の写真はJAPAN GAMEというNBAチームが日本に来て試合をするというイベントに参加したときの写真です。チケットの値段は高かったですが憧れのNBA選手を間近に見れてとても嬉しかったです。我らの八村塁選手も来ていました。</PlateHobby></li>
           <li><PlateHobby photo1={variety1} photo2={variety2 }　title='バラエティ' english='VARIETY' >　毎年予選の動画をすべて見るくらいM-1グランプリが好きです。M-1の日はずっとテレビの前で酒を飲みながら見ています。1年で一番楽しみな日です。2019年のミルクボーイの衝撃が未だに抜けていません。また歴代最高得点を超える漫才をみたいですね。<br/>　一番好きな芸人は千鳥です。千鳥が出ている番組は基本全部おもしろいですが一番のおすすめは『いろはに千鳥』です。テレビ埼玉のローカル番組ですがTVerで視聴しています。キー局の千鳥では見られないやる気の無さと悪口がめちゃくちゃおもしろいです。千鳥が好きな人はぜひ見てみてください。<br/><a href="https://tver.jp/series/srm0wbfun2" target="_blank">いろはに千鳥|TVer<a/></a></PlateHobby></li>
           <li><PlateHobby photo1={music1} photo2={music2} title='音楽' english='MUSIC'>　月に一回ライブに行く程度ですがロックバンドが好きです。色々なバンドのライブに行きますが中でも一番好きなバンドがヤバイTシャツ屋さんです。高校1年生のときから聞き始めて顧客歴（ヤバTのファンの名前）8年です。表紙は一人で東京まで行って参加した初の武道館ライブの写真です。コロナ禍で規制があったのが悔やまれますがとてもいいライブでした。<br/>また右の写真は僕の中で最近来てるTHE BONEZというバンドのライブ写真です。ライブは激しくて、もみくちゃにされますがとてもかっこいいバンドです。ぜひ一度聴いて見てください。</PlateHobby></li>
        </ul>
        </div>
    )
}
export default Hobby;