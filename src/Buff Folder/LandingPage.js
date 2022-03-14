import React from 'react';
import Card from '../Resusable/Card';
import Attributes from '../Resusable/Attributes';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import Dollar from '../Images/April-Dollar-Image.png';
import Dollar2 from '../Images/Card-Dollar-Image.png';
import Forex from '../Images/Forex-Growth.png';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlineEye } from 'react-icons/ai';
import { AiFillForward } from 'react-icons/ai';
import { BiPulse } from 'react-icons/bi';
import { GiPadlock } from 'react-icons/gi';
import Footer from '../Resusable/Footer';
import Buffer from '../Images/Buffer.jpg';
import LightSpeed from 'react-reveal/LightSpeed';
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';


function LandingPage() {
    return (
        <div>
            <div className='landing-container'>
                <LightSpeed left>
                    <div className='heading'>
                        <h1>
                            After <span>Hardwork</span>, <br /> comes <span className='retire'>Retirement</span> <br /> <span>Enjoyment</span>
                        </h1>
                        <p>Buffer helps you and your team <span>save for retirement</span> with no hassle on your end.</p>
                        <Link to='about'>
                            <button>
                                Start now
                                <AiOutlineArrowRight />
                            </button>
                        </Link>
                    </div>
                </LightSpeed>
                <div className='buss'>
                    <h2>Trusted by your favourite businesses</h2>
                </div>
                <div className='support-container'>
                    <Flip left>
                        <div className='finance'>
                            <h1>Your <span>pensions,</span> your <span>decision</span> </h1>
                            <p>Buffer allows you invest your pensions  in line with your risk appetite and ethical <span>(Sharia) standards.</span></p>
                        </div>
                    </Flip>

                    <Zoom left>
                        <div className='buff-service'>
                            <Card
                                img={Dollar}
                                alt={`Onboard your employee display`}
                                h1={`Onboard your startup employees`}
                                p={`Pay your company's pension contributions with no hassle.`}
                            />

                            <Card
                                img={Forex}
                                alt={`Forex display`}
                                h1={`Grow your Pensions`}
                                p={`Make your pensions work for you with our range of investment profiles.`}
                            />

                            <Card
                                img={Dollar2}
                                alt={`Phone display`}
                                h1={`Manage from your phone`}
                                p={`Manage your pension account with confidence.`}
                            />
                        </div>
                    </Zoom>
                </div>
                <div className='company-outro'>
                    <div className='outro-inner'>
                        <Fade right>
                            <div className='guarantee'>
                                <h1> Keeping your money <span>safe</span></h1>
                                <h2>Your pensions are managed and  administered by some of the best and  biggest pension managers in Africa.</h2>
                                <p>Built with security and <span>easy-of-use</span> mind.</p>
                            </div>
                        </Fade>
                        <Zoom right>
                            <div className='company-attr'>
                                <Attributes
                                    img={<AiFillForward />}
                                    h2={`Higher Returns`}
                                    p={`Your money is invested by one of the biggest and most reliable pension managers in Africa.`}
                                />

                                <Attributes
                                    img={<GiPadlock />}
                                    h2={`Safe`}
                                    p={`Buffer Africa is regulated by National Pensions Commision.`}
                                />

                                <Attributes
                                    img={<AiOutlineEye />}
                                    h2={`Transparent`}
                                    p={`Manage your pensions from the comfort of your mobile phone.`}
                                />

                                <Attributes
                                    img={<BiPulse />}
                                    h2={`Reliable`}
                                    p={`Our systems operate with 99%+ uptime and is certified with the highest standards.`}
                                />
                            </div>
                        </Zoom>
                    </div>
                </div>
                <LightSpeed left>
                    <div className='warning'>
                        <p>As with all investments your capital is at risk. The value of what you put in may go up, as well as go down </p>
                    </div>
                </LightSpeed>

                <div className='account-container'>
                    <h1>
                        Start saving today with <span>Buffer</span>
                    </h1>

                    <h3>Open a pension account in 10 minutes, <span>right from your phone.</span></h3>

                    <Link to='about'>
                        <button className='accont-btn'>
                            Open an account
                            <AiOutlineArrowRight />
                        </button>
                    </Link>
                </div>
                <Footer
                    img={Buffer}
                />
            </div>
        </div>
    )
}

export default LandingPage