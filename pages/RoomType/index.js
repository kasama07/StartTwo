import style from "./roomtype.module.css";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";


export default function RoomType(){
    return(
     <div className={style.body}>
          <Navbar/>
          <div className={style.container}>
               <div className={style.boxgrid}>
                    <Link href= "/RoomType/fan"className={style.boxbackgroundNon}>
                         <div className={style.box}>    
                               ห้องประเภทพัดลม
                         </div>      
                         <div className={style.boximg}>
                            <img className={style.img1} src="https://i.pinimg.com/564x/61/11/00/611100f92e606fb39547c66f80e827fd.jpg" width={280} height ={260}/>
                            <img className={style.img2} src="https://i.pinimg.com/564x/53/01/2d/53012d4eef03168de29eaf4ce376f1a9.jpg" width={280} height ={260}/>
                            <img className={style.img3} src="https://i.pinimg.com/564x/6b/8d/66/6b8d6606dbf23f5ec6eed11bc005d9f9.jpg" width={280} height ={260}/>
                            <img className={style.img4} src="/add.png" width={60} height={60}></img>
                         </div>
                         
                    </Link> 
                    <div className={style.slide}>
                         <img className={style.iconslideleft} src="/arrow-left.png" width={50} height={50}></img>
                         <img className={style.iconslideright} src="/arrow-right.png" width={50} height={50}></img>
                        <figure className={style.figure}>
                            <img src="https://i.pinimg.com/564x/61/11/00/611100f92e606fb39547c66f80e827fd.jpg" width={100} height ={100}/>
                            <img src="https://i.pinimg.com/564x/53/01/2d/53012d4eef03168de29eaf4ce376f1a9.jpg" width={100} height ={100}/>
                            <img src="https://i.pinimg.com/564x/6b/8d/66/6b8d6606dbf23f5ec6eed11bc005d9f9.jpg" width={100} height ={100}/>
                            <img src="https://i.pinimg.com/736x/d3/c0/85/d3c0857dc009024e6260285e4cb1b125.jpg" width={100} height ={100}/>
                            <img src="https://i.pinimg.com/736x/79/d8/aa/79d8aa6263ffc42f3f9ff2f5285b2c7b.jpg" width={100} height ={100}/>
                        </figure>  
                    </div>
                    <Link href= "/RoomType/air"className={style.boxbackgroundNon}>
                         <div className={style.box}>    
                               ห้องประเภทปรับอากาศ
                         </div>      
                         <div className={style.boximg}>
                            <img className={style.img1} src="https://i.pinimg.com/736x/44/d6/9c/44d69cd0393575194a6aa5f0ddb87b1b.jpg" width={280} height ={260}/>
                            <img className={style.img2} src="https://i.pinimg.com/564x/40/cc/b1/40ccb19f4e30c9ef1fa732d16cad7c3e.jpg" width={280} height ={260}/>
                            <img className={style.img3} src="https://i.pinimg.com/564x/57/38/75/5738757d3ab2123dd3d3966d494376a0.jpg" width={280} height ={260}/>
                            <img className={style.img4} src="/add.png" width={60} height={60}></img>
                         </div>
                         
                    </Link> 
                    <div className={style.slide}>
                         <img className={style.iconslideleft} src="/arrow-left.png" width={50} height={50}></img>
                         <img className={style.iconslideright} src="/arrow-right.png" width={50} height={50}></img>
                        <figure className={style.figure}>
                            <img src="https://i.pinimg.com/736x/44/d6/9c/44d69cd0393575194a6aa5f0ddb87b1b.jpg" width={100} height ={100}/>
                            <img src="https://i.pinimg.com/564x/40/cc/b1/40ccb19f4e30c9ef1fa732d16cad7c3e.jpg" width={100} height ={100}/>
                            <img src="https://i.pinimg.com/564x/57/38/75/5738757d3ab2123dd3d3966d494376a0.jpg" width={100} height ={100}/>
                            <img src="https://i.pinimg.com/564x/21/de/8e/21de8e271ae2bcfecd4d9113dc70fb3e.jpg" width={100} height ={100}/>
                            <img src="https://i.pinimg.com/564x/08/af/7e/08af7ec1f5c877a05a8c4d4d954df069.jpg" width={100} height ={100}/>
                        </figure>  
                    </div>
                    <Link href= "/RoomType/suite"className={style.boxbackgroundNon}>
                         <div className={style.box}>    
                               ห้องประเภทสูท
                         </div>      
                         <div className={style.boximg}>
                            <img className={style.img1} src="https://i.pinimg.com/564x/96/71/11/96711166e5bf9951771c518e0cd709e4.jpg" width={280} height ={260}/>
                            <img className={style.img2} src="https://i.pinimg.com/564x/d3/8d/02/d38d02aedcaeb18d918e41759bcad5c6.jpg" width={280} height ={260}/>
                            <img className={style.img3} src="https://i.pinimg.com/564x/f4/5f/d5/f45fd5b347fa2ad9121bb402fb7a4af5.jpg" width={280} height ={260}/>
                            <img className={style.img4} src="/add.png" width={60} height={60}></img>
                         </div>
                         
                    </Link> 
                    <div className={style.slide}>
                         <img className={style.iconslideleft} src="/arrow-left.png" width={50} height={50}></img>
                         <img className={style.iconslideright} src="/arrow-right.png" width={50} height={50}></img>
                        <figure className={style.figure}>
                            <img src="https://i.pinimg.com/564x/96/71/11/96711166e5bf9951771c518e0cd709e4.jpg" width={100} height ={100}/>
                            <img src="https://i.pinimg.com/564x/d3/8d/02/d38d02aedcaeb18d918e41759bcad5c6.jpg" width={100} height ={100}/>
                            <img src="https://i.pinimg.com/564x/f4/5f/d5/f45fd5b347fa2ad9121bb402fb7a4af5.jpg" width={100} height ={100}/>
                            <img src="https://i.pinimg.com/564x/50/b6/1f/50b61fe254bbd4d96bc4daa887d6fcf3.jpg" width={100} height ={100}/>
                            <img src="https://i.pinimg.com/564x/69/65/2f/69652ffa67a261b53ef6a51a27636c09.jpg" width={100} height ={100}/>
                        </figure>  
                    </div>
                    <Link href= "/RoomType/daily"className={style.boxbackgroundNon}>
                         <div className={style.box}>    
                               ห้องประเภทรายวัน
                         </div>      
                         <div className={style.boximg}>
                            <img className={style.img1} src="https://i.pinimg.com/564x/df/4b/b3/df4bb37d0c14bdb2415cdd6423745dcc.jpg" width={280} height ={260}/>
                            <img className={style.img2} src="https://i.pinimg.com/564x/52/d5/07/52d507f59873fcefc8602e0b1ab75423.jpg" width={280} height ={260}/>
                            <img className={style.img3} src="https://i.pinimg.com/564x/0c/00/ee/0c00ee7d708a5751393ed827e5d297ea.jpg" width={280} height ={260}/>
                            <img className={style.img4} src="/add.png" width={60} height={60}></img>
                         </div>
                         
                    </Link> 
                    <div className={style.slide}>
                         <img className={style.iconslideleft} src="/arrow-left.png" width={50} height={50}></img>
                         <img className={style.iconslideright} src="/arrow-right.png" width={50} height={50}></img>
                        <figure className={style.figure}>
                            <img src="https://i.pinimg.com/564x/df/4b/b3/df4bb37d0c14bdb2415cdd6423745dcc.jpg" width={100} height ={100}/>
                            <img src="https://i.pinimg.com/564x/52/d5/07/52d507f59873fcefc8602e0b1ab75423.jpg" width={100} height ={100}/>
                            <img src="https://i.pinimg.com/564x/0c/00/ee/0c00ee7d708a5751393ed827e5d297ea.jpg" width={100} height ={100}/>
                            <img src="https://i.pinimg.com/564x/69/62/b7/6962b74a1d15ce6911a4f9b60147d3de.jpg" width={100} height ={100}/>
                            <img src="https://i.pinimg.com/564x/20/b5/8f/20b58fda7b07c8a4069e0edb9c485fee.jpg" width={100} height ={100}/>
                        </figure>  
                    </div>
               </div>
          </div>
          <Footer/>
     </div>
    )
}