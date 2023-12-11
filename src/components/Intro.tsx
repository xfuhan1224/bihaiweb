import './Intro.css'

const Intro = () => {
    return (
        <div className='intro-container'>
            <div className='intro-left'>
                <img src='bhsb.jpg' alt='zipai' />
            </div>
            <div className='intro-right'>
                <div className='topic'>
                    Self Introduction
                </div>
                <div className='intro-content'>
                    <p className='part1'>
                    My name is Hai Bi and I am from China.
I studied International Events Management at University of Surrey during my undergraduate period, and learned Digital Marketing model at University of Exeter as postgradute student.  
                    </p>
                    <p className='part2'>
                    I like listening to music and doing some sports in my spare time, and I love to spend my time on social media like TikTok, Instagram. Social media is becoming more popular as science and technology advance, and many global transactions will be made online. I chose this major because I enjoy social media. 
                    </p>


                </div>
            </div>
        </div>
    );
};

export default Intro;