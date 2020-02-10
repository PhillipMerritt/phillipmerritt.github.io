/*
<script src="js/vendor/modernizr-3.8.0.min.js"></script>
  <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
  <script>window.jQuery || document.write('<script src="js/vendor/jquery-3.4.1.min.js"><\/script>')</script>
 */

function genGraph(){

    const character_name = document.getElementById("character_select").value;

    
    const node_count = parseInt(document.getElementById("hardNodesBox").value);
    const refreshes = parseInt(document.getElementById("refreshesBox").value);
    const node_cost = parseInt(document.getElementById("costBox").value);
    const cur_lvl = parseInt(document.getElementById("lvlBox").value);
    const goal_lvl = parseInt(document.getElementById("goalBox").value);
    let cur_shards = parseInt(document.getElementById("shardBox").value);
    const daily_energy = 375 + 120 * 3;
    const daily_cost = node_count * node_cost * (5 * (1 + refreshes));
    const daily_attempts = Math.floor(((daily_energy > daily_cost) ? daily_cost : daily_energy) / node_cost);
    const shards_plvl = [10, 15, 25, 30, 65, 85, 100];
    const total_shards_plvl = [10, 25, 50, 80, 145, 230, 330];
    const attempts = [];
    const x = [];
    for(let i=0; i<=refreshes; i++){
      attempts.push(node_count * 5 * (1 + i));
      x.push([]);
    }
  
    for(let i=0; i<cur_lvl; i++){
      cur_shards += shards_plvl[i];
    }
  
    const req_shards = total_shards_plvl[goal_lvl - 1] - cur_shards;
  
    document.getElementById("neededText").textContent = 'Total shards needed: ' + req_shards;
    document.getElementById("attemptsText").textContent = 'Daily attempts: ' + daily_attempts;
  
    const drop_rate = 1.0/3.0;
    const mean = req_shards * Math.round(1 / drop_rate);
    
    const y = [];
    let r_fact;
    let ptor;
    if(req_shards<170){
      r_fact = 1;
      for(let i=1; i<req_shards; i++) {
        r_fact *= i;
      }
  
      ptor = Math.pow(drop_rate,req_shards);
    } else {
      r_fact = 0;
      for (let i = 1; i < req_shards; i++) {
        r_fact += Math.log(i);
      }
  
      ptor = Math.log(Math.pow(drop_rate,req_shards));
    }

    let scalar;
    let prob;
    let mean_prob;
    let max_prob = 0;
    for(let n=req_shards; n < 2*mean - req_shards; n++) {
      for(let i=0; i<=refreshes; i++){
        x[i].push(n/attempts[i]);
      }
      
  
      if(req_shards < 170){
        scalar = ptor * Math.pow(1 - drop_rate, n - req_shards);
        prob = choose(n-1,req_shards-1,r_fact, scalar);
      }else{
        scalar = ptor + Math.log(Math.pow(1 - drop_rate, n - req_shards));
        prob = log_choose(n-1,req_shards-1,r_fact, scalar);
      }
      
      if(n === mean){
        mean_prob = prob;
      }
      if(prob > max_prob) {
        max_prob = prob
      }
      y.push(prob);
    }
  
    let graph = document.getElementById('farmGraph');

    const shapes = [];
    const annotations = [];
    const data = [];
    for(let i=0; i<=refreshes; i++) {
      shapes.push({
        type: 'line',
        x0: mean / attempts[i],
        y0: 0,
        x1: mean / attempts[i],
        y1: max_prob,
        line: {
          color: 'rgb(128, 0, 128)',
          width: 4,
          dash: 'dot'
        }
      });
      annotations.push(
        {
          x: mean / attempts[i],
          y: mean_prob,
          xref: 'x',
          yref: 'y',
          text: 'mean',
          showarrow: true,
          arrowhead: 7,
          ax: 40,
          ay: -15,
          arrowhead: 0
        }
      );
      data.push({
        x: x[i],
        y: y,
        name: i + ' refreshes'
      });
    }
  
    const layout = {
      title: {
        text: 'Days to get ' + req_shards + ' shards',
        xanchor: 'center',
        yanchor: 'top',
      },
      xaxis: {
        title: 'Days'
      },
      yaxis: {
        showline: false,
        showgrid: false,
        showticklabels: false,
        title: 'Probability'
      },
      shapes: shapes,
      annotations: annotations
    };
  
    Plotly.newPlot(graph, data, layout);
  
  
  }
  
  function choose(n, r, r_fact, scalar) {
    let total = scalar;
    for(let i=1+n-r; i <= n; i++){
      total *= i;
    }
    //console.log(n + 'C' + r + ': ' + r_fact);
    return total / r_fact;
  }
  function log_choose(n, r, r_fact, scalar) {
    let total = scalar;
    /*for(let i=1+n-r; i <= n; i++){
      total *= i;
    }*/
    //console.log(Math.log(r_fact));
    total += (log_fact(n) - (r_fact + log_fact(n-r)));
    //console.log(n + 'C' + r + ': ' + r_fact);
    return total;
  }
  
  function log_fact(n){
    let total = 0;
    for(let i=1; i<=n; i++){
      total += Math.log(i);
    }
    return total;
  }

  /*function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

  const characters = async ()=>{return JSON.parse(httpGet("https://script.google.com/macros/s/AKfycbxyzFyyOZvHyLcQcfR6ee8TAJqeuqst7Y-O-oSMNb2wlcnYFrs/exec?isShip=false"));};
  */
 const characters = JSON.parse(`[{"name":"Aayla Secura","locations":[{"type":"Cantina","level":"5-B"},{"type":"Guild Shop","cost":"450/5"}]},
 {"name":"Admiral Ackbar","locations":[{"type":"Arena Shipments","cost":"400/5"},{"type":"Fleet Shipments","cost":"400/5"},{"type":"Guild Event Shop","cost":"400/5"}]},
 {"name":"Ahsoka Tano","locations":[{"type":"Cantina Shipments","cost":"400/5"},{"type":"Fleet Shipments","cost":"400/5"},{"type":"Hard Modes (D)","level":"4-C"}]},
 {"name":"Ahsoka Tano (Fulcrum)","locations":[{"type":"Fleet Shipments","cost":"400/5"}]},
 {"name":"Amilyn Holdo","locations":[{"type":"Hard Modes (D)","level":"7-C"}]},
 {"name":"ARC Trooper","locations":[{"type":"Cantina","level":"5-G"}]},
 {"name":"Asajj Ventress","locations":[{"type":"Arena Shipments","cost":"400/5"}]},
 {"name":"Aurra Sing","locations":[{"type":"Cantina","level":"7-C"}]},
 {"name":"B1 Battle Droid","locations":[{"type":"Hard Modes (Fleet)","level":"5-B"}]},
 {"name":"B2 Super Battle Droid","locations":[{"type":"Cantina","level":"6-D"},{"type":"Guild Shop","cost":"450/5"}]},
 {"name":"Barriss Offee","locations":[{"type":"Cantina","level":"6-A"},{"type":"Guild Shop","cost":"450/5"},{"type":"Hard Modes (D)","level":"5-C"},{"type":"Hard Modes (D)","level":"5-E"}]},
 {"name":"Bastila Shan","locations":[{"type":"Hard Modes (D)","level":"5-B"},{"type":"Hard Modes (Fleet)","level":"2-D"}]},
 {"name":"Bastila Shan (Fallen)","locations":[{"type":"Hard Modes (D)","level":"7-A"}]},
 {"name":"Baze Malbus","locations":[{"type":"Hard Modes (L)","level":"9-C"}]},
 {"name":"BB-8","locations":[{"type":"Legendary Event","name":"Pieces and Plans"}]},
 {"name":"Biggs Darklighter","locations":[{"type":"Cantina","level":"3-G"},{"type":"Fleet Shipments","cost":"400/5"},{"type":"Guild Event Shop","cost":"400/5"},{"type":"GW Shipments","cost":"400/5"},{"type":"Hard Modes (D)","level":"4-A"}]},
 {"name":"Bistan","locations":[{"type":"Cantina Shipments","cost":"400/5"},{"type":"Fleet Shipments","cost":"400/5"},{"type":"Guild Event Shop","cost":"400/5"}]},
 {"name":"Boba Fett","locations":[{"type":"Cantina Shipments","cost":"400/5"},{"type":"Fleet Shipments","cost":"400/5"},{"type":"Hard Modes (D)","level":"2-B"},{"type":"Hard Modes (D)","level":"4-E"}]},
 {"name":"Bodhi Rook","locations":[{"type":"GW Shipments","cost":"400/5"}]},
 {"name":"Bossk","locations":[{"type":"Hard Modes (D)","level":"9-B"}]},
 {"name":"C-3PO","locations":[{"type":"Legendary Event","name":"Contact Protocol"}]},
 {"name":"Cad Bane","locations":[{"type":"GW Shipments","cost":"400/5"}]},
 {"name":"Canderous Ordo","locations":[{"type":"Cantina","level":"5-C"}]},
 {"name":"Captain Han Solo","locations":[{"type":"Cantina","level":"7-D"}]},
 {"name":"Captain Phasma","locations":[{"type":"GW Shipments","cost":"400/5"}]},
 {"name":"Carth Onasi","locations":[{"type":"Hard Modes (Fleet)","level":"2-E"}]},
 {"name":"Cassian Andor","locations":[{"type":"Arena Shipments","cost":"400/5"},{"type":"Guild Event Shop","cost":"400/5"}]},
 {"name":"CC-2224 Cody","locations":[{"type":"Fleet Shipments","cost":"400/5"},{"type":"Guild Shop","cost":"450/5"}]},
 {"name":"Chewbacca","locations":[{"type":"Legendary Event","name":"One Famous Wookiee"}]},
 {"name":"Chief Chirpa","locations":[{"type":"Cantina","level":"5-D"}]},
 {"name":"Chief Nebit","locations":[{"type":"Arena Shipments","cost":"400/5"}]},
 {"name":"Chirrut Îmwe","locations":[{"type":"Fleet Shipments","cost":"400/5"}]},
 {"name":"Chopper","locations":[{"type":"Cantina Shipments","cost":"400/5"},{"type":"Guild Event Shop","cost":"400/5"}]},
 {"name":"Clone Sergeant - Phase I","locations":[{"type":"Fleet Shipments","cost":"400/5"},{"type":"Guild Shop","cost":"450/5"},{"type":"Hard Modes (D)","level":"1-B"},{"type":"Hard Modes (D)","level":"3-E"},{"type":"Hard Modes (L)","level":"5-E"}]},
 {"name":"Clone Wars Chewbacca","locations":[{"type":"Cantina","level":"1-C"},{"type":"Hard Modes (D)","level":"2-C"},{"type":"Hard Modes (L)","level":"3-E"}]},
 {"name":"Colonel Starck","locations":[{"type":"Guild Shop","cost":"450/5"}]},
 {"name":"Commander Luke Skywalker","locations":[{"type":"Hero's Journey","name":"Luke Skywalker"}]},
 {"name":"Coruscant Underworld Police","locations":[{"type":"Arena Shipments","cost":"400/5"}]},
 {"name":"Count Dooku","locations":[{"type":"Cantina","level":"6-G"},{"type":"Hard Modes (D)","level":"1-C"},{"type":"Hard Modes (L)","level":"1-C"}]},
 {"name":"CT-21-0408 Echo","locations":[{"type":"Fleet Shipments","cost":"400/5"},{"type":"Guild Shop","cost":"450/5"}]},
 {"name":"CT-5555 Fives","locations":[{"type":"Cantina Shipments","cost":"400/5"},{"type":"Fleet Shipments","cost":"400/5"},{"type":"Hard Modes (D)","level":"2-D"}]},
 {"name":"CT-7567 Rex","locations":[{"type":"Fleet Shipments","cost":"400/5"},{"type":"Guild Shop","cost":"450/5"}]},
 {"name":"Darth Malak","locations":[{"type":"Special Event","name":"Star Forge Showdown"},{"type":"Guild Event Shop","cost":"3800/10"}]},
 {"name":"Darth Maul","locations":[{"type":"Fleet Shipments","cost":"400/5"},{"type":"Guild Shop","cost":"450/5"}]},
 {"name":"Darth Nihilus","locations":[{"type":"Hard Modes (D)","level":"9-A"}]},
 {"name":"Darth Revan","locations":[{"type":"Hero's Journey","name":"Scourge of the Old Republic"}]},
 {"name":"Darth Sidious","locations":[{"type":"Arena Shipments","cost":"400/5"}]},
 {"name":"Darth Sion","locations":[{"type":"Hard Modes (L)","level":"9-A"},{"type":"Hard Modes (Fleet)","level":"4-D"}]},
 {"name":"Darth Traya","locations":[{"type":"Raids","name":"The Sith Triumvirate"}]},
 {"name":"Darth Vader","locations":[{"type":"Achievements"},{"type":"Fleet Shipments","cost":"400/5"}]},
 {"name":"Dathcha","locations":[{"type":"GW Shipments","cost":"400/5"},{"type":"Hard Modes (L)","level":"3-B"},{"type":"Hard Modes (L)","level":"3-F"}]},
 {"name":"Death Trooper","locations":[{"type":"Cantina","level":"8-A"}]},
 {"name":"Dengar","locations":[{"type":"Guild Shop","cost":"450/5"}]},
 {"name":"Director Krennic","locations":[{"type":"Guild Event Shop","cost":"400/5"},{"type":"Hard Modes (L)","level":"9-D"}]},
 {"name":"Droideka","locations":[{"type":"Hard Modes (L)","level":"8-B"}]},
 {"name":"Eeth Koth","locations":[{"type":"Arena Shipments","cost":"400/5"}]},
 {"name":"Embo","locations":[{"type":"Hard Modes (D)","level":"8-C"}]},
 {"name":"Emperor Palpatine","locations":[{"type":"Legendary Event","name":"Emperor's Demise"}]},
 {"name":"Enfys Nest","locations":[{"type":"Hard Modes (Fleet)","level":"5-D"}]},
 {"name":"Ewok Elder","locations":[{"type":"Guild Shop","cost":"450/5"},{"type":"Hard Modes (L)","level":"2-C"}]},
 {"name":"Ewok Scout","locations":[{"type":"Hard Modes (L)","level":"1-A"}]},
 {"name":"Ezra Bridger","locations":[{"type":"Cantina","level":"2-B"},{"type":"Fleet Shipments","cost":"400/5"},{"type":"Guild Event Shop","cost":"400/5"}]},
 {"name":"Finn","locations":[{"type":"Cantina","level":"3-E"},{"type":"Guild Shop","cost":"450/5"},{"type":"Hard Modes (L)","level":"7-A"}]},
 {"name":"First Order Executioner","locations":[{"type":"Cantina","level":"2-G"}]},
 {"name":"First Order Officer","locations":[{"type":"Cantina Shipments","cost":"400/5"}]},
 {"name":"First Order SF TIE Pilot","locations":[{"type":"Guild Shop","cost":"450/5"}]},
 {"name":"First Order Stormtrooper","locations":[{"type":"Hard Modes (D)","level":"2-A"},{"type":"Hard Modes (L)","level":"2-B"}]},
 {"name":"First Order TIE Pilot","locations":[{"type":"Fleet Shipments","cost":"400/5"},{"type":"Hard Modes (D)","level":"6-B"},{"type":"Hard Modes (L)","level":"6-D"}]},
 {"name":"Gamorrean Guard","locations":[{"type":"Guild Shop","cost":"450/5"}]},
 {"name":"Gar Saxon","locations":[{"type":"Cantina","level":"2-E"},{"type":"Guild Event Shop","cost":"400/5"}]},
 {"name":"Garazeb Zeb Orrelios","locations":[{"type":"Guild Event Shop","cost":"400/5"},{"type":"GW Shipments","cost":"400/5"}]},
 {"name":"General Grievous","locations":[{"type":"Fleet Shipments","cost":"400/5"},{"type":"Shard Shop","cost":"1125/5"}]},
 {"name":"General Hux","locations":[{"type":"Intro P1 (Marquee)","name":"Ruthless General"}]},
 {"name":"General Kenobi","locations":[{"type":"Raids","name":"Tank Takedown"}]},
 {"name":"General Veers","locations":[{"type":"Guild Event Shop","cost":"400/5"},{"type":"Hard Modes (L)","level":"4-C"},{"type":"Hard Modes (L)","level":"6-C"}]},
 {"name":"Geonosian Brood Alpha","locations":[{"type":"Cantina","level":"8-D"}]},
 {"name":"Geonosian Soldier","locations":[{"type":"Cantina","level":"1-A"},{"type":"Fleet Shipments","cost":"400/5"}]},
 {"name":"Geonosian Spy","locations":[{"type":"Cantina","level":"4-D"},{"type":"Fleet Shipments","cost":"400/5"}]},
 {"name":"Grand Admiral Thrawn","locations":[{"type":"Legendary Event","name":"Artist of War"}]},
 {"name":"Grand Master Yoda","locations":[{"type":"Legendary Event","name":"Grand Master's Training"}]},
 {"name":"Grand Moff Tarkin","locations":[{"type":"Arena Shipments","cost":"400/5"},{"type":"Fleet Shipments","cost":"400/5"},{"type":"Guild Event Shop","cost":"400/5"}]},
 {"name":"Greedo","locations":[{"type":"Arena Shipments","cost":"400/5"}]},
 {"name":"Han Solo","locations":[{"type":"Raids","name":"The Pit"}]},
 {"name":"Hera Syndulla","locations":[{"type":"Cantina","level":"1-F"},{"type":"Guild Event Shop","cost":"400/5"}]},
 {"name":"Hermit Yoda","locations":[{"type":"Guild Event Shop","cost":"1350/5"}]},
 {"name":"HK-47","locations":[{"type":"Arena Shipments","cost":"400/5"}]},
 {"name":"Hoth Rebel Scout","locations":[{"type":"Cantina Shipments","cost":"400/5"},{"type":"Guild Event Shop","cost":"400/5"},{"type":"Hard Modes (D)","level":"6-A"}]},
 {"name":"Hoth Rebel Soldier","locations":[{"type":"Guild Event Shop","cost":"400/5"},{"type":"Hard Modes (D)","level":"3-B"}]},
 {"name":"IG-100 MagnaGuard","locations":[{"type":"Cantina","level":"3-C"},{"type":"Guild Shop","cost":"450/5"},{"type":"Hard Modes (D)","level":"6-E"}]},
 {"name":"IG-86 Sentinel Droid","locations":[{"type":"Cantina","level":"4-E"},{"type":"GW Shipments","cost":"400/5"},{"type":"Hard Modes (D)","level":"2-F"},{"type":"Hard Modes (L)","level":"4-D"}]},
 {"name":"IG-88","locations":[{"type":"Arena Shipments","cost":"400/5"}]},
 {"name":"Ima-Gun Di","locations":[{"type":"Cantina","level":"7-E"},{"type":"Guild Shop","cost":"450/5"},{"type":"Hard Modes (D)","level":"5-A"},{"type":"Hard Modes (L)","level":"7-C"}]},
 {"name":"Imperial Probe Droid","locations":[{"type":"Territory Battle","name":"Imperial Retaliation"}]},
 {"name":"Imperial Super Commando","locations":[{"type":"Guild Event Shop","cost":"400/5"},{"type":"Cantina","level":"2-C"}]},
 {"name":"Jango Fett","locations":[{"type":"Hard Modes (L)","level":"8-D"}]},
 {"name":"Jawa","locations":[{"type":"Cantina","level":"2-D"},{"type":"Hard Modes (D)","level":"4-F"},{"type":"Hard Modes (L)","level":"6-B"}]},
 {"name":"Jawa Engineer","locations":[{"type":"Guild Shop","cost":"450/5"}]},
 {"name":"Jawa Scavenger","locations":[{"type":"Cantina Shipments","cost":"400/5"}]},
 {"name":"Jedi Consular","locations":[{"type":"Cantina","level":"3-A"},{"type":"Fleet Shipments","cost":"400/5"},{"type":"Hard Modes (D)","level":"1-D"},{"type":"Hard Modes (D)","level":"3-C"},{"type":"Hard Modes (L)","level":"1-B"}]},
 {"name":"Jedi Knight Anakin","locations":[{"type":"Cantina","level":"7-G"},{"type":"Hard Modes (L)","level":"5-C"}]},
 {"name":"Jedi Knight Guardian","locations":[{"type":"Cantina Shipments","cost":"400/5"},{"type":"Hard Modes (D)","level":"3-F"}]},
 {"name":"Jedi Knight Revan","locations":[{"type":"Hero's Journey","name":"Legend of the Old Republic"}]},
 {"name":"Jolee Bindo","locations":[{"type":"Hard Modes (Fleet)","level":"4-E"},{"type":"Hard Modes (D)","level":"6-D"}]},
 {"name":"Juhani","locations":[{"type":"Hard Modes (L)","level":"6-A"}]},
 {"name":"Jyn Erso","locations":[{"type":"Guild Shop","cost":"450/5"}]},
 {"name":"K-2SO","locations":[{"type":"Guild Event Shop","cost":"400/5"},{"type":"GW Shipments","cost":"400/5"}]},
 {"name":"Kanan Jarrus","locations":[{"type":"Arena Shipments","cost":"400/5"},{"type":"Guild Event Shop","cost":"400/5"}]},
 {"name":"Ki-Adi-Mundi","locations":[{"type":"Territory Battle","name":"Republic Offensive"}]},
 {"name":"Kit Fisto","locations":[{"type":"Cantina","level":"4-F"},{"type":"Guild Shop","cost":"450/5"}]},
 {"name":"Kylo Ren","locations":[{"type":"Cantina","level":"4-C"},{"type":"Guild Shop","cost":"450/5"}]},
 {"name":"Kylo Ren (Unmasked)","locations":[{"type":"Cantina","level":"3-F"}]},
 {"name":"L3-37","locations":[{"type":"Cantina","level":"5-A"}]},
 {"name":"Lando Calrissian","locations":[{"type":"Cantina","level":"1-E"},{"type":"Guild Event Shop","cost":"400/5"}]},
 {"name":"Lobot","locations":[{"type":"Hard Modes (L)","level":"4-B"},{"type":"Hard Modes (L)","level":"5-B"}]},
 {"name":"Logray","locations":[{"type":"Guild Shop","cost":"450/5"}]},
 {"name":"Luke Skywalker (Farmboy)","locations":[{"type":"Cantina","level":"1-B"},{"type":"Guild Event Shop","cost":"400/5"},{"type":"Guild Shop","cost":"450/5"},{"type":"Hard Modes (L)","level":"7-D"}]},
 {"name":"Luminara Unduli","locations":[{"type":"GW Shipments","cost":"400/5"},{"type":"Hard Modes (D)","level":"2-E"},{"type":"Hard Modes (L)","level":"3-D"}]},
 {"name":"Mace Windu","locations":[{"type":"Arena Shipments","cost":"400/5"},{"type":"Cantina","level":"4-A"},{"type":"Fleet Shipments","cost":"400/5"},{"type":"Hard Modes (L)","level":"2-E"}]},
 {"name":"Magmatrooper","locations":[{"type":"GW Shipments","cost":"400/5"},{"type":"Guild Event Shop","cost":"400/5"}]},
 {"name":"Mission Vao","locations":[{"type":"Cantina","level":"7-A"}]},
 {"name":"Mob Enforcer","locations":[{"type":"Cantina Shipments","cost":"400/5"}]},
 {"name":"Mother Talzin","locations":[{"type":"Special Event","name":"Defense of Dathomir"},{"type":"Hard Modes (L)","level":"8-A"}]},
 {"name":"Nightsister Acolyte","locations":[{"type":"Cantina","level":"2-A"},{"type":"Guild Shop","cost":"450/5"}]},
 {"name":"Nightsister Initiate","locations":[{"type":"GW Shipments","cost":"400/5"}]},
 {"name":"Nightsister Spirit","locations":[{"type":"Special Event","name":"Ghosts of Dathomir"},{"type":"Cantina","level":"7-F"}]},
 {"name":"Nightsister Zombie","locations":[{"type":"Special Event","name":"Ghosts of Dathomir"},{"type":"Hard Modes (D)","level":"8-D"}]},
 {"name":"Nute Gunray","locations":[{"type":"Arena Shipments","cost":"400/5"}]},
 {"name":"Obi-Wan Kenobi (Old Ben)","locations":[{"type":"Cantina","level":"2-F"},{"type":"Guild Shop","cost":"450/5"}]},
 {"name":"Old Daka","locations":[{"type":"Cantina Shipments","cost":"400/5"},{"type":"Hard Modes (D)","level":"4-B"}]},
 {"name":"Padmé Amidala","locations":[{"type":"Legendary Event","name":"Aggressive Negotiations"}]},
 {"name":"Pao","locations":[{"type":"Cantina Shipments","cost":"400/5"}]},
 {"name":"Paploo","locations":[{"type":"Cantina","level":"3-D"},{"type":"Guild Shop","cost":"450/5"}]},
 {"name":"Plo Koon","locations":[{"type":"Cantina","level":"4-G"},{"type":"Fleet Shipments","cost":"400/5"}]},
 {"name":"Poe Dameron","locations":[{"type":"Cantina Shipments","cost":"400/5"},{"type":"Fleet Shipments","cost":"400/5"},{"type":"Hard Modes (L)","level":"7-B"}]},
 {"name":"Poggle the Lesser","locations":[{"type":"GW Shipments","cost":"400/5"},{"type":"Hard Modes (L)","level":"4-E"},{"type":"Hard Modes (L)","level":"6-E"}]},
 {"name":"Princess Leia","locations":[{"type":"Arena Shipments","cost":"400/5"},{"type":"Guild Event Shop","cost":"400/5"}]},
 {"name":"Qi'ra","locations":[{"type":"Cantina","level":"3-B"}]},
 {"name":"Qui-Gon Jinn","locations":[{"type":"Cantina Shipments","cost":"400/5"}]},
 {"name":"R2-D2","locations":[{"type":"Legendary Event","name":"Daring Droid"}]},
 {"name":"Range Trooper","locations":[{"type":"Hard Modes (D)","level":"3-A"}]},
 {"name":"Rebel Officer Leia Organa","locations":[{"type":"Territory Battle","name":"Rebel Assault"}]},
 {"name":"Resistance Pilot","locations":[{"type":"Fleet Shipments","cost":"400/5"},{"type":"GW Shipments","cost":"400/5"}]},
 {"name":"Resistance Trooper","locations":[{"type":"Guild Shop","cost":"450/5"},{"type":"Hard Modes (L)","level":"3-A"}]},
 {"name":"Rey (Jedi Training)","locations":[{"type":"Hero's Journey","name":"Rey"}]},
 {"name":"Rey (Scavenger)","locations":[{"type":"Guild Shop","cost":"450/5"},{"type":"Hard Modes (D)","level":"5-D"},{"type":"Hard Modes (L)","level":"2-A"}]},
 {"name":"Rose Tico","locations":[{"type":"Hard Modes (L)","level":"4-F"}]},
 {"name":"Royal Guard","locations":[{"type":"Hard Modes (D)","level":"5-F"},{"type":"Hard Modes (L)","level":"1-D"},{"type":"Guild Event Shop","cost":"400/5"}]},
 {"name":"Sabine Wren","locations":[{"type":"Hard Modes (D)","level":"1-A"}]},
 {"name":"Savage Opress","locations":[{"type":"Arena Shipments","cost":"400/5"}]},
 {"name":"Scarif Rebel Pathfinder","locations":[{"type":"Cantina","level":"1-D"},{"type":"Fleet Shipments","cost":"400/5"},{"type":"Guild Event Shop","cost":"400/5"}]},
 {"name":"Shaak Ti","locations":[{"type":"Hard Modes (Fleet)","level":"5-A"}]},
 {"name":"Shoretrooper","locations":[{"type":"Hard Modes (L)","level":"9-B"}]},
 {"name":"Sith Assassin","locations":[{"type":"Cantina","level":"6-C"},{"type":"Guild Shop","cost":"450/5"}]},
 {"name":"Sith Empire Trooper","locations":[{"type":"Cantina","level":"8-B"}]},
 {"name":"Sith Marauder","locations":[{"type":"Cantina","level":"6-E"}]},
 {"name":"Sith Trooper","locations":[{"type":"Intro P1 (Marquee)","name":"Emperor's Elite"}]},
 {"name":"Snowtrooper","locations":[{"type":"Cantina","level":"7-B"},{"type":"Guild Shop","cost":"450/5"},{"type":"Hard Modes (L)","level":"8-C"},{"type":"Guild Event Shop","cost":"400/5"}]},
 {"name":"Stormtrooper","locations":[{"type":"Cantina Shipments","cost":"400/5"},{"type":"Hard Modes (L)","level":"3-C"},{"type":"Guild Event Shop","cost":"400/5"}]},
 {"name":"Stormtrooper Han","locations":[{"type":"Arena Shipments","cost":"400/5"},{"type":"Guild Event Shop","cost":"400/5"}]},
 {"name":"Sun Fac","locations":[{"type":"Fleet Shipments","cost":"400/5"},{"type":"Guild Shop","cost":"450/5"}]},
 {"name":"T3-M4","locations":[{"type":"Cantina","level":"6-B"}]},
 {"name":"Talia","locations":[{"type":"Cantina","level":"1-G"},{"type":"Guild Shop","cost":"450/5"},{"type":"Hard Modes (L)","level":"2-D"},{"type":"Hard Modes (L)","level":"2-F"}]},
 {"name":"Teebo","locations":[{"type":"GW Shipments","cost":"400/5"},{"type":"Hard Modes (D)","level":"3-D"},{"type":"Hard Modes (L)","level":"4-A"}]},
 {"name":"TIE Fighter Pilot","locations":[{"type":"Cantina","level":"4-B"},{"type":"Fleet Shipments","cost":"400/5"},{"type":"Guild Event Shop","cost":"400/5"}]},
 {"name":"Tusken Raider","locations":[{"type":"GW Shipments","cost":"400/5"},{"type":"Hard Modes (D)","level":"6-C"}]},
 {"name":"Tusken Shaman","locations":[{"type":"Fleet Shipments","cost":"400/5"},{"type":"Guild Shop","cost":"450/5"}]},
 {"name":"Ugnaught","locations":[{"type":"Arena Shipments","cost":"400/5"}]},
 {"name":"URoRRuR'R'R","locations":[{"type":"Hard Modes (L)","level":"5-A"},{"type":"Hard Modes (L)","level":"5-F"}]},
 {"name":"Vandor Chewbacca","locations":[{"type":"Hard Modes (D)","level":"4-D"}]},
 {"name":"Veteran Smuggler Chewbacca","locations":[{"type":"Cantina","level":"5-F"}]},
 {"name":"Veteran Smuggler Han Solo","locations":[{"type":"Cantina","level":"5-E"}]},
 {"name":"Visas Marr","locations":[{"type":"Hard Modes (D)","level":"7-B"}]},
 {"name":"Wampa","locations":[{"type":"Guild Event Shop","cost":"1350/5"}]},
 {"name":"Wat Tambor","locations":[{"type":"Territory Battle","name":"Separatist Might"}]},
 {"name":"Wedge Antilles","locations":[{"type":"Cantina","level":"6-F"},{"type":"Fleet Shipments","cost":"400/5"}]},
 {"name":"Wicket","locations":[{"type":"Heroic Event","name":"Endor Escalation"},{"type":"Hard Modes (D)","level":"8-A"}]},
 {"name":"Young Han Solo","locations":[{"type":"Guild Shop"}]},
 {"name":"Young Lando Calrissian","locations":[{"type":"Hard Modes (Fleet)","level":"1-D"}]},
 {"name":"Zaalbar","locations":[{"type":"Hard Modes (L)","level":"5-D"},{"type":"Hard Modes (Fleet)","level":"3-C"}]},
 {"name":"Zam Wesell","locations":[{"type":"Fleet Shipments","cost":"400/5"},{"type":"Guild Shop","cost":"450/5"}]}]`);
  /*let s = "";
  for(let i=0; i<characters.length; i++){
    s += "<option value=\"" + characters[i].name +"\">"+characters[i].name+"</option>\n"
  }
  console.log(s);*/