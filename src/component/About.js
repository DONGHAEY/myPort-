import {
    ReactJs,
    Redux,
    Reduxsaga,
    Javascript,
    Html5,
    CssThree,
    Python,
    C,
    Nodedotjs
} from '@icons-pack/react-simple-icons';


export default function() {
    return (
        <div className="about">
            <h1 className="contentTitle">ABOUT ME</h1>
            <div>
                <div style={{display:"inline-block", textAlign:'center' }}>
                    <img style={{display:'inline-block', width:'380px', minWidth:'15%', minHeight:'15%', marginRight:'50px', borderRadius:'30px'}} src="./saewon.jpg"></img>
                </div>
                <div style={{display:"inline-block"}}>
                    <h1>디테일은 퀄리티다</h1>
                    <p>안녕하세요 저는 되게 멋진 사람입니다</p>
                    <p>저는 정말 멋진 인생을 살아왔습니다 그래서 제가 자랑스럽습니다</p>
                    <p>저는 부산소프트웨어 마이스터고등학교에 다닙니다</p>
                    <p>저는 부산 영도구 동삼1동에 살고있습니다</p>
                    <bold>주소 : 부산광역시 영도구</bold>
                    <bold>이메일 : tv9310@naver.com</bold>
                    <br>
                    </br>
                    <br></br><br></br><br></br>
                </div>
            </div>
            <h1 className="contentTitle">
                SKILLS
            </h1>

                <div style={{width:'80%'}}>
                    <div style={{display:'inline-block', paddingInline:'25px'}}>
                        <Html5 color="#E34F26" size={80} />
                        <p>HTML</p>
                    </div>
                    <div style={{display:'inline-block', paddingInline:'25px'}}>
                    <Javascript color="#F7DF1E" size={80} />
                        <p>JS</p>
                    </div>
                    <div style={{display:'inline-block', paddingInline:'25px'}}>
                    <CssThree color="#1572B6" size={80} />
                        <p>CSS</p>
                    </div>
                    <div style={{display:'inline-block', paddingInline:'25px'}}>
                        <ReactJs color="#61DAFB" size={80} />
                        <p>ReactJs</p>
                    </div>
                    <div style={{display:'inline-block', paddingInline:'25px'}}>
                    <Redux color="#764ABC" size={80} />
                        <p>Redux</p>
                    </div>
                    <div style={{display:'inline-block', paddingInline:'25px'}}>
                        <C color='red' size={80}/>
                        <p>C</p>
                    </div>
                    <div style={{display:'inline-block', paddingInline:'25px'}}>
                        <Nodedotjs color='#81C147' size={80}/>
                        <p>NodeJs</p>
                    </div>
                </div>
            <h1 className="contentTitle">
                PortFolio
            </h1>
            <div>
                <div style={{ display:'inline-block', backgroundColor:'whitesmoke', width:'300px', height:'300px', borderRadius:'30px', margin:'15px' }}>
                    <h2>일차함수 그래프</h2>
                    <p>일차함수를 2점만 입력하여 알아보자!</p>
                    <img style={{width:'280px'}} src="https://github.com/DONGHAEY/IlchaFunction/raw/main/%EA%B2%B0%EA%B3%BC%EB%AC%BC.png"></img>
                    <div><a href="https://github.com/DONGHAEY/IlchaFunction">주소</a></div>   
                </div>
                <div style={{display:'inline-block', backgroundColor:'whitesmoke', width:'300px', height:'300px', borderRadius:'30px', margin:'15px'}}>
                    <h2>전자픽셀노트</h2>
                    <p>심리치료플랫폼</p>
                    <img style={{width:'280px'}} src="./ㅇㅇ.png"></img>
                    <div><a href="https://docs.google.com/presentation/d/1eCiHFtp4ikyhxNhz3ab1qWk_5yWj4re7YQD5OTaqfQs/edit#slide=id.g133db928879_0_1">주소</a></div>
                </div>
                <div style={{display:'inline-block', backgroundColor:'whitesmoke', width:'300px', height:'300px', borderRadius:'30px', margin:'15px'}}>
                    <h2>코로나백신접종위치</h2>
                    <p>간편하게 전국적으로 어디에 있는지 확인</p>
                    <img style={{width:'280px'}} src="./coronaVaccineD.png"></img>
                    <div><a href="https://github.com/DONGHAEY/sideProject-2021/blob/main/www/coronavaccine/index.html">주소</a></div>
                </div>
                
            </div>
            <h1>My Github</h1>
            <button onClick={() => {
                document.location.href = "https://github.com/DONGHAEY"
            }} style={{backgroundColor:'black', color:'white', width:'150px'}}>깃허브로 이동하기</button>
        </div>
    )
}