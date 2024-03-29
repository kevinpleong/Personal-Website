import React from 'react';
import ReactDOM from 'react-dom';
import Africa from './Morocco 062715.jpg'
import Australia from './Australia.jpg'
import Australia2 from './Sydney Bridge and Opera House.jpg'
import Australia3 from './Sydney Harbor Bridge 072714.jpg'
import Belgium from './Belgium.jpg'
import Boston from './Boston.jpg'
import Chamonix from './Chamonix France.JPG'
import Chaminix2 from './Paragliding France.jpg'
import China from './China Great Wall.jpg'
import China1 from './China Ice Glacier.jpg'
import Ecuador from './Ecuador 033114.jpg'
import England from './Big Ben England.JPG'
import England2 from './Harry Potter England.JPG'
import England3 from './London-Bridge.jpg'
import Florida  from './Space Shuttle Launch.jpg'
import Galapagos from './Galapagos 040414.jpg'
import Galapagos2 from './Galapagos.jpg'
import Germany from './Germany.JPG'
import Hawaii from './hawaii.JPG'
import Japan from './Japan-Potstickers.jpg'
import Japan2 from './Streets of Japan.jpg'
import Japan3 from './Japan Train.jpg'
import Japa4 from './zoo-Japan.jpg'
import Korea from './DMZ-Korea 040412.jpg'
import LosAngeles from './LA.jpg'
import Malaysia from './Malaysia.jpg'
import NewOrleans from './New Orleans.jpg'
import NewYork from './New York.jpg'
import NewZealand from './Hobbit New Zealand.jpg'
import Paris from './Disney Paris.JPG'
import Paris2 from './Notre Dame Paris.jpg'
import Phuket from './Phuket Elephant Ride 032919.jpg'
import Philippines from './KTD Scuba Cebu.jpg'
import Philippines2 from './Borocay Sand Castle.jpg'
import Philippines3 from './Parasailing Borocay Philippines.jpg'
import Rome from './Rome Italy Colosseum.JPG'
import Seattle from './Seattle.jpg'
import Singapore from './Singapore 101214.jpg'
import Singapore2 from './Singapore.jpg'
import Spain from './Sagrada Familia Church Barcelona 070115.jpg'
import Spain2 from './Rock of Gibraltar 062615.jpg'
import Thailand from './James Bond Island Thailand.jpg'
import Taiwan from './Taipei 101 Taiwan.jpg'
import Virginia from './Virginia.jpg'
import Virginia2 from './Virginia2.JPG'

export default class Travel extends React.Component {
  render() {
    return (
      <div className="container">
      <div className="col-md-12">
        <h1>Travels</h1>
      </div>
      <div className="row">
        <div className="col-md-12">
          <p>Domestic Travel Photos</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <img src={Virginia} alt="Giants vs. Nationals" className="img-fluid"></img>
            <div className="caption text-center">
              <p className="text-center">In Washington DC at the Giants vs. Nationals game</p>
            </div>
          </div>
        <div className="col-md-4">
          <img src={Virginia2} alt="Eating Crab" className="img-fluid"></img>
            <div className="caption text-center">
              <p className="text-center">Eating Crab in Virginia</p>
            </div>
          </div>
        <div className="col-md-4">
          <img src={Boston} alt="Boston" className="img-fluid"></img>
            <div className="caption text-center">
              <p className="text-center">Boston</p>
            </div>
          </div>
      </div>

      <div className="row">
        <div className="col-md-4">
          <img src={Florida} alt="Space Shuttle Launch" className="img-fluid"></img>
            <div className="caption text-center">
              <p className="text-center">Florida Nasa Space Shuttle Launch</p>
            </div>
          </div>
        <div className="col-md-4">
          <img src={NewOrleans} className="img-fluid" alt="New Orleans"></img>
            <div className="caption text-center">
              <p className="text-center">New Orleans in front of a Creole Restaurant</p>
            </div>
          </div>
        <div className="col-md-4">
          <img src={NewYork} alt="New York" className="img-fluid"></img>
            <div className="caption text-center">
              <p className="text-center">New York</p>
            </div>
          </div>
      </div>

      <div className="row">
        <div className="col-md-4">
          <img src={Hawaii} alt="Ziplining" className="img-fluid"></img>
            <div className="caption text-center">
              <p className="text-center">Ziplining in Hawaii</p>
            </div>
          </div>
        <div className="col-md-4">
          <img src={LosAngeles} alt="In front of the Jurasic Park sign in LA" className="img-fluid"></img>
            <div className="caption text-center">
              <p className="text-center">LA</p>
            </div>
          </div>
        <div className="col-md-4">
          <img src={Seattle} alt="Seattle" className="img-fluid"></img>
            <div className="caption text-center">
              <p className="text-center">Seattle</p>
            </div>
          </div>
      </div>

<div className="row">
  <p>I ironically have traveled internationally a lot more than I have actually traveled domestically.</p>
</div>
      <div className="row">
        <div className="col-md-3">
          <img src={China} alt="Family and I on the Great Wall of China" className="img-fluid"></img>
            <div className="caption text-center">
              <p className="text-center">Great Wall of China</p>
            </div>
          </div>
        <div className="col-md-3">
          <img src={China1} alt="Harbin Ice and Snow Sculpture Festival" className="img-fluid"></img>
            <div className="caption text-center">
              <p className="text-center">Harbin China Ice and Snow Sculpture Festival</p>
            </div>
          </div>
          <div className="col-md-3">
            <img src={Philippines2} alt="Sand Castle with the words Borocay August, 5, 2012" className="img-fluid"></img>
              <div className="caption text-center">
                <p className="text-center">Sand Castle Borocay Philippines</p>
              </div>
            </div>
      </div>


      <div className="row">
        <div className="col-md-3">
          <img src={Philippines3} alt="Parasailing in Philippines" className="img-fluid"></img>
            <div className="caption text-center">
              <p className="text-center">Parasailing Borocay Philippines</p>
            </div>
          </div>
        <div className="col-md-3">
          <img src={Philippines} alt="Scuba Diving in Cebu Philippines" className="img-fluid"></img>
            <div className="caption text-center">
              <p className="text-center">Scuba Diving in Cebu, Philippines</p>
            </div>
          </div>
        <div className="col-md-3">
          <img src={Korea} alt="DMZ in Korea" className="img-fluid"></img>
            <div className="caption text-center">
              <p className="text-center">DMZ in Seoul, South Korea</p>
            </div>
          </div>
        <div className="col-md-3">
          <img src={Australia} alt="Holding a Koala" className="img-fluid"></img>
            <div className="caption text-center">
              <p className="text-center">Holding a Koala in Sydney, Australia</p>
            </div>
          </div>
        <div className="col-md-3">
          <img src={Australia2} alt="Sydney Bridge and Opera House" className="img-fluid"></img>
            <div className="caption text-center">
              <p className="text-center">In front of Sydney Bridge and Opera House</p>
            </div>
          </div>
      </div>


      <div className="row">
        <div className="col-md-3">
          <img src={Australia3} alt="Sydney Harbor Bridge Australia" className="img-fluid"></img>
            <div className="caption text-center">
              <p className="text-center">Sydney Harbor Bridge in Australia</p>
            </div>
          </div>
        <div className="col-md-3">
          <img src={NewZealand} alt="Hobit New Zealand" className="img-fluid"></img>
            <div className="caption text-center">
              <p className="text-center">Hobbit in New Zealand</p>
            </div>
          </div>
        <div className="col-md-3">
          <img src={Ecuador} alt="Ecuador Longitude latitude 00" className="img-fluid"></img>
            <div className="caption text-center">
              <p className="text-center">Ecuador Longitude latitude 00</p>
            </div>
          </div>
        <div className="col-md-3">
          <img src={Galapagos} alt="Charles Darwin Research Center" className="img-fluid"></img>
            <div className="caption text-center">
              <p className="text-center">Charles Darwin Research Center</p>
            </div>
          </div>
      </div>


      <div className="row">
        <div className="col-md-3">
          <img src={Galapagos2} alt="Giant Tortoise with me" className="img-fluid"></img>
            <div className="caption text-center">
              <p className="text-center">Galapagos Giant Tortoise</p>
            </div>
          </div>
        <div className="col-md-3">
          <img src={Singapore} alt="In front of the Singapore Sentenial Hotel Sign" className="img-fluid"></img>
            <div className="caption text-center">
              <p className="text-center">Singapore Hotel</p>
            </div>
          </div>
        <div className="col-md-3">
          <img src={Singapore2} alt="Santosa Singapore" className="img-fluid"></img>
            <div className="caption text-center">
              <p className="text-center">Santosa Singapore</p>
            </div>
          </div>
        <div className="col-md-3">
          <img src={Malaysia} alt="Tioman Malaysia" className="img-fluid"></img>
            <div className="caption text-center">
              <p className="text-center">Tioman Malasia</p>
            </div>
          </div>
      </div>


      <div className="row">
        <div className="col-md-3">
          <img src={Paris} alt="Disney Paris France" className="img-fluid"></img>
            <div className="caption text-center">
              <p className="text-center">Disney Paris in France</p>
            </div>
          </div>
        <div className="col-md-3">
          <img src={Paris2} alt="Notre Dame Paris" className="img-fluid"></img>
            <div className="caption text-center">
              <p className="text-center">Notre Dame, Paris, France</p>
            </div>
          </div>
        <div className="col-md-3">
          <img src={England} alt="Big Ben in England" className="img-fluid"></img>
            <div className="caption text-center">
              <p className="text-center">Big Ben in England</p>
            </div>
          </div>
        <div className="col-md-3">
          <img src={England3} alt="London bridge" className="img-fluid"></img>
            <div className="caption text-center">
              <p className="text-center">London Bridge</p>
            </div>
          </div>
      </div>


      <div className="row">
        <div className="col-md-3">
          <img src={England2} alt="Lights" className="img-fluid"></img>
            <div className="caption text-center">
              <p className="text-center">Harry Potter England</p>
            </div>
          </div>
        <div className="col-md-3">
          <img src={Spain} alt="Sagrada Familia Church Barcelona" className="img-fluid"></img>
            <div className="caption text-center">
              <p className="text-center">Sagrada Familia Church Barcelona</p>
            </div>
          </div>
        <div className="col-md-3">
          <img src={Spain2} alt="Rock of Gibraltar" className="img-fluid"></img>
            <div className="caption text-center">
              <p className="text-center">Rock of Gibraltar</p>
            </div>
          </div>
        <div className="col-md-3">
          <img src={Africa} alt="Morocco Camel Ride" className="img-fluid"></img>
            <div className="caption text-center">
              <p className="text-center">Morocco Camel Ride</p>
            </div>
          </div>
      </div>


      <div className="row">
        <div className="col-md-3">
          <img src={Chamonix} className="img-fluid" alt="Chamonix France"></img>
            <div className="caption text-center">
              <p className="text-center">Chamonix, France</p>
            </div>
          </div>
        <div className="col-md-3">
          <img src={Chaminix2} alt="Paragliding off Mount BLanc" className="img-fluid"></img>
            <div className="caption text-center">
              <p className="text-center">Paragliding off of Mont Blanc in France</p>
            </div>
          </div>
        <div className="col-md-3">
          <img src={Belgium} alt="Belgium" className="img-fluid"></img>
            <div className="caption text-center">
              <p className="text-center">Belgium</p>
            </div>
          </div>
        <div className="col-md-3">
          <img src={Germany} alt="Germany" className="img-fluid"></img>
            <div className="caption text-center">
              <p className="text-center">Germany</p>
            </div>
          </div>
      </div>


      <div className="row">
        <div className="col-md-3">
          <img src={Rome} alt="Rome" className="img-fluid"></img>
            <div className="caption text-center">
              <p className="text-center">Rome Colleseum in Rome</p>
            </div>
          </div>
        <div className="col-md-3">
          <img src={Japan} alt="JapanPotstickers" className="img-fluid"></img>
            <div className="caption text-center">
              <p className="text-center">Eating Potstickers Japan</p>
            </div>
          </div>
        <div className="col-md-3">
          <img src={Japan2} alt="Train in Japan" className="img-fluid"></img>
            <div className="caption text-center">
              <p className="text-center">Train in Japan</p>
            </div>
          </div>
        <div className="col-md-3">
          <img src={Japan3} alt="zoo in Japan" className="img-fluid"></img>
            <div className="caption text-center">
              <p className="text-center">Zoo in Japan</p>
            </div>
          </div>
      </div>

      <div className="row">
        <div className="col-md-4">
          <img src={Thailand} alt="Kao Phing Kan also known as James Bond Island" className="img-fluid"></img>
            <div className="caption text-center">
              <p className="text-center">Khao Phing Kan
 James Bond Island in Thailand. See it in The Man with the Golden Gun</p>
            </div>
          </div>
        <div className="col-md-4">
          <img src={Phuket} alt="Phuket Thailand Elephant Ride" className="img-fluid"></img>
            <div className="caption text-center">
              <p className="text-center">Elephant Ride in Phuket Thailand</p>
            </div>
          </div>
        <div className="col-md-4">
          <img src={Taiwan} alt="Taiwan" className="img-fluid"></img>
            <div className="caption text-center">
              <p className="text-center">Taipei 101 Taiwan</p>
            </div>
          </div>
      </div>

      <div className="col-md-12">
        <p>I have travelled all over the world and travelled internationally a lot more than domestically. I am a little bit sick of Korea because I have been to there 5 times. I have been to Japan 3 times and the Philippines twice. I have been to London, England 3 times and Paris 4 times.</p>
    </div>
    </div>
    );
  } // END OF RENDER
} // END OF Travel
