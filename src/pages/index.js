
import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import pic1 from '../assets/images/project1.jpg';
import pic2 from '../assets/images/project2.jpg';
import pic3 from '../assets/images/project3.jpg';
import scrollTo from 'gatsby-plugin-smoothscroll';


function toggleWidget(className){
  var len = document.getElementsByClassName(className).length;
  for(var i=0;i<len;i++){
    if(document.getElementsByClassName(className)[i].style.display=="none"){
      document.getElementsByClassName(className)[i].style.display="block";
      document.getElementById("button-close").style.display="block";
      document.getElementById("widget-placeholder-icon").style.display="none";
    }
    else{
      document.getElementsByClassName(className)[i].style.display="none";
      document.getElementById("button-close").style.display="none";
      document.getElementById("widget-placeholder-icon").style.display="block";
    }
  }
}

//#b3b9c5;
// function toggleColor(){
//   var isLight=true;
//   if(isLight){
//     // document.getElementById("main").style.filter="invert(0.50)";
//     var len = document.getElementsByTagName("p").length;
//     for(var i=0;i<len;i++) document.getElementsByTagName("p")[i].style.filter="invert(0.50)";
//     document.getElementById("main").style.backgroundColor="black";
//   }
//   else{
//     document.getElementById("main").style.filter="";
//   }
//   isLight=!isLight;
// }

const IndexPage = () => (
  <Layout>
    <Header />

    <div id="main">
      <div className="box container">
        <section>
          <blockquote>
            <h2>"Do the best. Let God do the rest."</h2>
          </blockquote>
        </section>
      </div>
      <header className="major container medium">
        <h2>
          All About Me!
        </h2>
      </header>

      <div className="box container">
        <section>
            <header>
              <h2>Current Me</h2>
            </header>
            <p className="justify">
                I am Currently studying Computer Science to get my Bachelor Degree. 
                I like to get new knowledges and i want to use them to help people solve their problems.
                <br/>
                If you want to know my background, scroll down.
                <br/>
                if you want to know my project, scroll down further.
                <br/>
                if you want to connect with me, scroll down much further.
                <br/>
                Just Kidding, you don't need to scroll that much if you want to skip some parts, 
                you can use the buttons on the bottom-right of your screen to help you navigate.

            </p>
        </section>
      </div>

      <div className="box container">
        <section>
          <header>
            <h2>My Story</h2>
          </header>
          <p className="justify">
            Once upon a time. There was a boy born in <strong>Surakarta</strong> on <strong>July 23<sup>rd</sup>, 2001</strong>. 
            His parent gives him the name <strong>Timothy Nathanael Sampurna</strong>. Timothy grew to be an <strong>energetic</strong> and <strong>talkative</strong> boy.
            When he was in Elementary School, he moved to other school once. This new school helped him <strong>found his thing</strong> which was <strong>Mathematic</strong>.
            Once he get <strong>Silver-Award</strong> on a Mathematic Competition. He then finished his Elementary School and moved to
            Junior High School. His Junior High School was nothing out of ordinary, he still joined some Math Competitions despite never winning any of those. 
            <br></br> 
            When he got to Senior High School, he made two big leaps. First, he chosed to enroll in <strong>Public Senior High School</strong> even though 
            he was in <strong>Private Elementary and Junior High School</strong>. He made this leap because he wanted to see another environment. 
            Second, he chosed to join the <strong>Acceleration Class</strong> which made him finished his High School in just two years.
            There, he started to <strong>join</strong> some <strong>organizations</strong> such as <strong>Musyawarah Perwakilan Kelas</strong> and <strong>Debate Team of English Club</strong>.  
            <br></br> 
            Even though he only had two years there, he made it worth. He was once the <strong>Deputy Chief Executive</strong> of <strong>MPK Surakarta Forum</strong>.
            He also was a part of the <strong>A, B, and D division</strong> which jobs were to <strong>oversee</strong> other <strong>extracullicular Agenda and Events</strong>, to <strong>Gather Aspiration</strong> from student to make the school better, and <strong>to develop rules and guidelines</strong> for the MPK.
            <br></br>
            He then finished his Senior High School and got the chance to enroll at the <strong>PPTI Scholarship Program</strong>.
            There, he got to know more about programming and found another thing called <strong>Programming</strong>. Until now, he still study more about programming and everything in it.
          </p>
        </section>
      </div>

      <div className="box container">
        <section>
          <header>
            <h2>My Formal Educations</h2>
          </header>
          <ul className="default">
            <li>
              Elementary School: SD Kanisius Keprabon 2 Surakarta (2007-2009)
            </li>
            <li>
              Elementary School: SD Kristen Pelita Nusantara Kasih Surakarta (2009-2013)
            </li>
            <li>
              Junior High School: SMP Kristen Kalam Kudus Surakarta (2013-2016)
            </li>
            <li>
              Senior High School: SMA Negeri 3 Surakarta (2016-2018)
            </li>
            <li>
              PPTI BCA - Batch 6(2018-Present)
            </li>
          </ul>
        </section>
      </div>
            
      <div className="box container">
        <section>
          <header>
            <h2>My Non-Formal Educations</h2>
          </header>
          <ul className="default">
            <li>
              KUMON Completer (2014)
            </li>
            <li>
              QWIKLABS Google Cloud Platform Multiple Quest <a href="https://www.qwiklabs.com/public_profiles/ba5eff8a-6310-414b-95d7-58cafd234cb6">Completion</a>.
            </li>
          </ul>
        </section>
      </div>

      <div className="box alt container" id="myProject">
        <header className="tumpuk">
          <h2>My Projects</h2>
        </header>
        <section className="feature left">
          <a href="https://github.com/cindypriscillaa/Project_OOP_Bomberman/blob/master/Bomberman.zip" className="image icon fa-github">
            <img src={pic1} alt="" />
          </a>
          <div className="content">
            <h3>Bomberman Game</h3>
            <h7>By: <strong>Calvin, Cindy P, Timothy N S</strong></h7>
            <p className="justify">
              This Project was made for Object Oriented Programming Subject Score.
              This Project wass made with Native Java with OOP Concept.
               At that time, i didn't understand Versioning Control with Git, so i used Git as a storing place. 
              <br></br>
              That sound funny, but that was me, one year ago.
            </p>
          </div>
        </section>
        <section className="feature right">
          <a href="https://github.com/lavinske/KYAMedia" className="image icon fa-code">
            <img src={pic2} alt="" />
          </a>
          <div className="content">
            <h3>KYAMedia</h3>
            <h7>By: <strong>Jason Y H, Rendi, Steven L S, Timothy N S</strong></h7>
            <p className="justify">
              This Project is a Web Design project. 
              This Project is the Final Project of 
              Human Computer Interaction Lab. Subject.
              We made it with HTML, CSS, and JS.
              My Contributions are carousel, book, e-book, and about us pages, and responsive system.
              All contents' right goes to Gramedia which we take the design from.
            </p>
          </div>
        </section>
        <section className="feature left">
          <a href="https://ppap.bankcentral.asia/" className="image icon fa-globe">
            <img src={pic3} alt="" />
          </a>
          <div className="content">
            <h3>PPA/PPTI Portal</h3>
            <h7>By: <strong>Jason Y H, Rendi, Steven L S, Timothy N S</strong></h7>
            <p className="justify">
              This project is a web development project.
              This Project is the Final Project of 
              Human Computer Interaction Subject.
              We made this website by fulfilling many kind of Human Computer Interaction Concept.
              My Contribution to this project was i made the Blog and Blog-Post Page and do some styling.
            </p>
          </div>
        </section>
      </div>
      <div className="widget-wrapper">
        <div id="widget-placeholder" className="widget-exception" onClick={() => toggleWidget('widget')}>
          <i id="button-close" className="fas fa-times"></i>
          <i id="widget-placeholder-icon" className="fad fa-wrench fa-2x"></i>
        </div>
        <span id="button-scroll-up" className="widget" onClick={() => scrollTo('#header')}>
          <i className="fad fa-arrow-alt-circle-up fa-2x"></i>
        </span>
        <span id="button-project" className="widget" onClick={() => scrollTo('#myProject')}>
          <i className="fad fa-laptop-code fa-2x"></i>
        </span>
        <span id="button-contact" className="widget" onClick={() => scrollTo('#connect')}>
          <i className="fad fa-address-book fa-2x"></i>
        </span>
      </div>
    </div>
    <Footer />
  </Layout>
);

export default IndexPage;
