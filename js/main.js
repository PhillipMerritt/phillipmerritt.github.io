/*
<script src="js/vendor/modernizr-3.8.0.min.js"></script>
  <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
  <script>window.jQuery || document.write('<script src="js/vendor/jquery-3.4.1.min.js"><\/script>')</script>
 */

const characters = JSON.parse(`[{"name": "Aayla Secura", "locations": [{"type": "Cantina", "level": "5-B"}, {"type": "Guild Shop", "cost": "450/5"}], "file_name": "AAYLASECURA"},
{"name": "Admiral Ackbar", "locations": [{"type": "Arena Shop", "cost": "400/5"}, {"type": "Fleet Shop", "cost": "400/5"}, {"type": "Guild Event Shop", "cost": "400/5"}], "file_name": "ADMIRALACKBAR"},
{"name": "Ahsoka Tano", "locations": [{"type": "Cantina Shop", "cost": "400/5"}, {"type": "Fleet Shop", "cost": "400/5"}, {"type": "Hard Modes (D)", "level": "4-C"}], "file_name": "AHSOKATANO"},
{"name": "Ahsoka Tano (Fulcrum)", "locations": [{"type": "Fleet Shop", "cost": "400/5"}], "file_name": "FULCRUMAHSOKA"},
{"name": "Amilyn Holdo", "locations": [{"type": "Hard Modes (D)", "level": "7-C"}], "file_name": "AMILYNHOLDO"},
{"name": "ARC Trooper", "locations": [{"type": "Cantina", "level": "5-G"}], "file_name": "ARCTROOPER501ST"},
{"name": "Asajj Ventress", "locations": [{"type": "Arena Shop", "cost": "400/5"}], "file_name": "ASAJVENTRESS"},
{"name": "Aurra Sing", "locations": [{"type": "Cantina", "level": "7-C"}], "file_name": "AURRA_SING"},
{"name": "B1 Battle Droid", "locations": [{"type": "Hard Modes (Fleet)", "level": "5-B"}], "file_name": "B1BATTLEDROIDV2"},
{"name": "B2 Super Battle Droid", "locations": [{"type": "Cantina", "level": "6-D"}, {"type": "Guild Shop", "cost": "450/5"}], "file_name": "B2SUPERBATTLEDROID"},
{"name": "Barriss Offee", "locations": [{"type": "Cantina", "level": "6-A"}, {"type": "Guild Shop", "cost": "450/5"}, {"type": "Hard Modes (D)", "level": "5-C"}, {"type": "Hard Modes (D)", "level": "5-E"}], "file_name": "BARRISSOFFEE"},
{"name": "Bastila Shan", "locations": [{"type": "Hard Modes (D)", "level": "5-B"}, {"type": "Hard Modes (Fleet)", "level": "2-D"}], "file_name": "BASTILASHAN"},
{"name": "Bastila Shan (Fallen)", "locations": [{"type": "Hard Modes (D)", "level": "7-A"}], "file_name": "BASTILASHANDARK"},
{"name": "Baze Malbus", "locations": [{"type": "Hard Modes (L)", "level": "9-C"}], "file_name": "BAZEMALBUS"},
{"name": "BB-8", "locations": [{"type": "Legendary Event", "name": "Pieces and Plans"}], "file_name": "BB8"},
{"name": "Biggs Darklighter", "locations": [{"type": "Cantina", "level": "3-G"}, {"type": "Fleet Shop", "cost": "400/5"}, {"type": "Guild Event Shop", "cost": "400/5"}, {"type": "GW Shop", "cost": "400/5"}, {"type": "Hard Modes (D)", "level": "4-A"}], "file_name": "BIGGSDARKLIGHTER"},
{"name": "Bistan", "locations": [{"type": "Cantina Shop", "cost": "400/5"}, {"type": "Fleet Shop", "cost": "400/5"}, {"type": "Guild Event Shop", "cost": "400/5"}], "file_name": "BISTAN"},
{"name": "Boba Fett", "locations": [{"type": "Cantina Shop", "cost": "400/5"}, {"type": "Fleet Shop", "cost": "400/5"}, {"type": "Hard Modes (D)", "level": "2-B"}, {"type": "Hard Modes (D)", "level": "4-E"}], "file_name": "BOBAFETT"},
{"name": "Bodhi Rook", "locations": [{"type": "GW Shop", "cost": "400/5"}], "file_name": "BODHIROOK"},
{"name": "Bossk", "locations": [{"type": "Hard Modes (D)", "level": "9-B"}], "file_name": "BOSSK"},
{"name": "C-3PO", "locations": [{"type": "Legendary Event", "name": "Contact Protocol"}], "file_name": "C3POLEGENDARY"},
{"name": "Cad Bane", "locations": [{"type": "GW Shop", "cost": "400/5"}], "file_name": "CADBANE"},
{"name": "Canderous Ordo", "locations": [{"type": "Cantina", "level": "5-C"}], "file_name": "CANDEROUSORDO"},
{"name": "Captain Han Solo", "locations": [{"type": "Cantina", "level": "7-D"}], "file_name": "HOTHHAN"},
{"name": "Captain Phasma", "locations": [{"type": "GW Shop", "cost": "400/5"}], "file_name": "PHASMA"},
{"name": "Carth Onasi", "locations": [{"type": "Hard Modes (Fleet)", "level": "2-E"}], "file_name": "CARTHONASI"},
{"name": "Cassian Andor", "locations": [{"type": "Arena Shop", "cost": "400/5"}, {"type": "Guild Event Shop", "cost": "400/5"}], "file_name": "CASSIANANDOR"},
{"name": "CC-2224 Cody", "locations": [{"type": "Fleet Shop", "cost": "400/5"}, {"type": "Guild Shop", "cost": "450/5"}], "file_name": "CC2224"},
{"name": "Chewbacca", "locations": [{"type": "Legendary Event", "name": "One Famous Wookiee"}], "file_name": "CHEWBACCALEGENDARY"},
{"name": "Chief Chirpa", "locations": [{"type": "Cantina", "level": "5-D"}], "file_name": "CHIEFCHIRPA"},
{"name": "Chief Nebit", "locations": [{"type": "Arena Shop", "cost": "400/5"}], "file_name": "CHIEFNEBIT"},
{"name": "Chirrut Imwe", "locations": [{"type": "Fleet Shop", "cost": "400/5"}], "file_name": "CHIRRUTIMWE"},
{"name": "Chopper", "locations": [{"type": "Cantina Shop", "cost": "400/5"}, {"type": "Guild Event Shop", "cost": "400/5"}], "file_name": "CHOPPERS3"},
{"name": "Clone Sergeant - Phase I", "locations": [{"type": "Fleet Shop", "cost": "400/5"}, {"type": "Guild Shop", "cost": "450/5"}, {"type": "Hard Modes (D)", "level": "1-B"}, {"type": "Hard Modes (D)", "level": "3-E"}, {"type": "Hard Modes (L)", "level": "5-E"}], "file_name": "CLONESERGEANTPHASEI"},
{"name": "Clone Wars Chewbacca", "locations": [{"type": "Cantina", "level": "1-C"}, {"type": "Hard Modes (D)", "level": "2-C"}, {"type": "Hard Modes (L)", "level": "3-E"}], "file_name": "CLONEWARSCHEWBACCA"},
{"name": "Colonel Starck", "locations": [{"type": "Guild Shop", "cost": "450/5"}], "file_name": "COLONELSTARCK"},
{"name": "Commander Luke Skywalker", "locations": [{"type": "Hero's Journey", "name": "Luke Skywalker"}], "file_name": "COMMANDERLUKESKYWALKER"},
{"name": "Coruscant Underworld Police", "locations": [{"type": "Arena Shop", "cost": "400/5"}], "file_name": "CORUSCANTUNDERWORLDPOLICE"},
{"name": "Count Dooku", "locations": [{"type": "Cantina", "level": "6-G"}, {"type": "Hard Modes (D)", "level": "1-C"}, {"type": "Hard Modes (L)", "level": "1-C"}], "file_name": "COUNTDOOKU"},
{"name": "CT-21-0408 Echo", "locations": [{"type": "Fleet Shop", "cost": "400/5"}, {"type": "Guild Shop", "cost": "450/5"}], "file_name": "CT210408"},
{"name": "CT-5555 Fives", "locations": [{"type": "Cantina Shop", "cost": "400/5"}, {"type": "Fleet Shop", "cost": "400/5"}, {"type": "Hard Modes (D)", "level": "2-D"}], "file_name": "CT5555"},
{"name": "CT-7567 Rex", "locations": [{"type": "Fleet Shop", "cost": "400/5"}, {"type": "Guild Shop", "cost": "450/5"}], "file_name": "CT7567"},
{"name": "Darth Malak", "locations": [{"type": "Special Event", "name": "Star Forge Showdown"}, {"type": "Guild Event Shop", "cost": "3800/10"}], "file_name": "DARTHMALAK"},
{"name": "Darth Maul", "locations": [{"type": "Fleet Shop", "cost": "400/5"}, {"type": "Guild Shop", "cost": "450/5"}], "file_name": "MAUL"},
{"name": "Darth Nihilus", "locations": [{"type": "Hard Modes (D)", "level": "9-A"}], "file_name": "DARTHNIHILUS"},
{"name": "Darth Revan", "locations": [{"type": "Hero's Journey", "name": "Scourge of the Old Republic"}], "file_name": "DARTHREVAN"},
{"name": "Darth Sidious", "locations": [{"type": "Arena Shop", "cost": "400/5"}], "file_name": "DARTHSIDIOUS"},
{"name": "Darth Sion", "locations": [{"type": "Hard Modes (L)", "level": "9-A"}, {"type": "Hard Modes (Fleet)", "level": "4-D"}], "file_name": "DARTHSION"},
{"name": "Darth Traya", "locations": [{"type": "Raids", "name": "The Sith Triumvirate"}], "file_name": "DARTHTRAYA"},
{"name": "Darth Vader", "locations": [{"type": "Achievements"}, {"type": "Fleet Shop", "cost": "400/5"}], "file_name": "VADER"},
{"name": "Dathcha", "locations": [{"type": "GW Shop", "cost": "400/5"}, {"type": "Hard Modes (L)", "level": "3-B"}, {"type": "Hard Modes (L)", "level": "3-F"}], "file_name": "DATHCHA"},
{"name": "Death Trooper", "locations": [{"type": "Cantina", "level": "8-A"}], "file_name": "DEATHTROOPER"},
{"name": "Dengar", "locations": [{"type": "Guild Shop", "cost": "450/5"}], "file_name": "DENGAR"},
{"name": "Director Krennic", "locations": [{"type": "Guild Event Shop", "cost": "400/5"}, {"type": "Hard Modes (L)", "level": "9-D"}], "file_name": "DIRECTORKRENNIC"},
{"name": "Droideka", "locations": [{"type": "Hard Modes (L)", "level": "8-B"}], "file_name": "DROIDEKA"},
{"name": "Eeth Koth", "locations": [{"type": "Arena Shop", "cost": "400/5"}], "file_name": "EETHKOTH"},
{"name": "Embo", "locations": [{"type": "Hard Modes (D)", "level": "8-C"}], "file_name": "EMBO"},
{"name": "Emperor Palpatine", "locations": [{"type": "Legendary Event", "name": "Emperor's Demise"}], "file_name": "EMPERORPALPATINE"},
{"name": "Enfys Nest", "locations": [{"type": "Hard Modes (Fleet)", "level": "5-D"}], "file_name": "ENFYSNEST"},
{"name": "Ewok Elder", "locations": [{"type": "Guild Shop", "cost": "450/5"}, {"type": "Hard Modes (L)", "level": "2-C"}], "file_name": "EWOKELDER"},
{"name": "Ewok Scout", "locations": [{"type": "Hard Modes (L)", "level": "1-A"}], "file_name": "EWOKSCOUT"},
{"name": "Ezra Bridger", "locations": [{"type": "Cantina", "level": "2-B"}, {"type": "Fleet Shop", "cost": "400/5"}, {"type": "Guild Event Shop", "cost": "400/5"}], "file_name": "EZRABRIDGERS3"},
{"name": "Finn", "locations": [{"type": "Cantina", "level": "3-E"}, {"type": "Guild Shop", "cost": "450/5"}, {"type": "Hard Modes (L)", "level": "7-A"}], "file_name": "FINN"},
{"name": "First Order Executioner", "locations": [{"type": "Cantina", "level": "2-G"}], "file_name": "FIRSTORDEREXECUTIONER"},
{"name": "First Order Officer", "locations": [{"type": "Cantina Shop", "cost": "400/5"}], "file_name": "FIRSTORDEROFFICERMALE"},
{"name": "First Order SF TIE Pilot", "locations": [{"type": "Guild Shop", "cost": "450/5"}], "file_name": "FIRSTORDERSPECIALFORCESPILOT"},
{"name": "First Order Stormtrooper", "locations": [{"type": "Hard Modes (D)", "level": "2-A"}, {"type": "Hard Modes (L)", "level": "2-B"}], "file_name": "FIRSTORDERTROOPER"},
{"name": "First Order TIE Pilot", "locations": [{"type": "Fleet Shop", "cost": "400/5"}, {"type": "Hard Modes (D)", "level": "6-B"}, {"type": "Hard Modes (L)", "level": "6-D"}], "file_name": "FIRSTORDERTIEPILOT"},
{"name": "Gamorrean Guard", "locations": [{"type": "Guild Shop", "cost": "450/5"}], "file_name": "GAMORREANGUARD"},
{"name": "Gar Saxon", "locations": [{"type": "Cantina", "level": "2-E"}, {"type": "Guild Event Shop", "cost": "400/5"}], "file_name": "GARSAXON"},
{"name": "Garazeb Zeb Orrelios", "locations": [{"type": "Guild Event Shop", "cost": "400/5"}, {"type": "GW Shop", "cost": "400/5"}], "file_name": "ZEBS3"},
{"name": "General Grievous", "locations": [{"type": "Fleet Shop", "cost": "400/5"}, {"type": "Shard Shop", "cost": "1125/5"}], "file_name": "GRIEVOUS"},
{"name": "General Hux", "locations": [{"type": "Intro P1 (Marquee)", "name": "Ruthless General"}], "file_name": "GENERALHUX"},
{"name": "General Kenobi", "locations": [{"type": "Raids", "name": "Tank Takedown"}], "file_name": "GENERALKENOBI"},
{"name": "General Veers", "locations": [{"type": "Guild Event Shop", "cost": "400/5"}, {"type": "Hard Modes (L)", "level": "4-C"}, {"type": "Hard Modes (L)", "level": "6-C"}], "file_name": "VEERS"},
{"name": "Geonosian Brood Alpha", "locations": [{"type": "Cantina", "level": "8-D"}], "file_name": "GEONOSIANBROODALPHA"},
{"name": "Geonosian Soldier", "locations": [{"type": "Cantina", "level": "1-A"}, {"type": "Fleet Shop", "cost": "400/5"}], "file_name": "GEONOSIANSOLDIER"},
{"name": "Geonosian Spy", "locations": [{"type": "Cantina", "level": "4-D"}, {"type": "Fleet Shop", "cost": "400/5"}], "file_name": "GEONOSIANSPY"},
{"name": "Grand Admiral Thrawn", "locations": [{"type": "Legendary Event", "name": "Artist of War"}], "file_name": "GRANDADMIRALTHRAWN"},
{"name": "Grand Master Yoda", "locations": [{"type": "Legendary Event", "name": "Grand Master's Training"}], "file_name": "GRANDMASTERYODA"},
{"name": "Grand Moff Tarkin", "locations": [{"type": "Arena Shop", "cost": "400/5"}, {"type": "Fleet Shop", "cost": "400/5"}, {"type": "Guild Event Shop", "cost": "400/5"}], "file_name": "GRANDMOFFTARKIN"},
{"name": "Greedo", "locations": [{"type": "Arena Shop", "cost": "400/5"}], "file_name": "GREEDO"},
{"name": "Han Solo", "locations": [{"type": "Raids", "name": "The Pit"}], "file_name": "HANSOLO"},
{"name": "Hera Syndulla", "locations": [{"type": "Cantina", "level": "1-F"}, {"type": "Guild Event Shop", "cost": "400/5"}], "file_name": "HERASYNDULLAS3"},
{"name": "Hermit Yoda", "locations": [{"type": "Guild Event Shop", "cost": "1350/5"}], "file_name": "HERMITYODA"},
{"name": "HK-47", "locations": [{"type": "Arena Shop", "cost": "400/5"}], "file_name": "HK47"},
{"name": "Hoth Rebel Scout", "locations": [{"type": "Cantina Shop", "cost": "400/5"}, {"type": "Guild Event Shop", "cost": "400/5"}, {"type": "Hard Modes (D)", "level": "6-A"}], "file_name": "HOTHREBELSCOUT"},
{"name": "Hoth Rebel Soldier", "locations": [{"type": "Guild Event Shop", "cost": "400/5"}, {"type": "Hard Modes (D)", "level": "3-B"}], "file_name": "HOTHREBELSOLDIER"},
{"name": "IG-100 MagnaGuard", "locations": [{"type": "Cantina", "level": "3-C"}, {"type": "Guild Shop", "cost": "450/5"}, {"type": "Hard Modes (D)", "level": "6-E"}], "file_name": "MAGNAGUARD"},
{"name": "IG-86 Sentinel Droid", "locations": [{"type": "Cantina", "level": "4-E"}, {"type": "GW Shop", "cost": "400/5"}, {"type": "Hard Modes (D)", "level": "2-F"}, {"type": "Hard Modes (L)", "level": "4-D"}], "file_name": "IG86SENTINELDROID"},
{"name": "IG-88", "locations": [{"type": "Arena Shop", "cost": "400/5"}], "file_name": "IG88"},
{"name": "Ima-Gun Di", "locations": [{"type": "Cantina", "level": "7-E"}, {"type": "Guild Shop", "cost": "450/5"}, {"type": "Hard Modes (D)", "level": "5-A"}, {"type": "Hard Modes (L)", "level": "7-C"}], "file_name": "IMAGUNDI"},
{"name": "Imperial Probe Droid", "locations": [{"type": "Territory Battle", "name": "Imperial Retaliation"}], "file_name": "IMPERIALPROBEDROID"},
{"name": "Imperial Super Commando", "locations": [{"type": "Guild Event Shop", "cost": "400/5"}, {"type": "Cantina", "level": "2-C"}], "file_name": "IMPERIALSUPERCOMMANDO"},
{"name": "Jango Fett", "locations": [{"type": "Hard Modes (L)", "level": "8-D"}], "file_name": "JANGOFETT"},
{"name": "Jawa", "locations": [{"type": "Cantina", "level": "2-D"}, {"type": "Hard Modes (D)", "level": "4-F"}, {"type": "Hard Modes (L)", "level": "6-B"}], "file_name": "JAWA"},
{"name": "Jawa Engineer", "locations": [{"type": "Guild Shop", "cost": "450/5"}], "file_name": "JAWAENGINEER"},
{"name": "Jawa Scavenger", "locations": [{"type": "Cantina Shop", "cost": "400/5"}], "file_name": "JAWASCAVENGER"},
{"name": "Jedi Consular", "locations": [{"type": "Cantina", "level": "3-A"}, {"type": "Fleet Shop", "cost": "400/5"}, {"type": "Hard Modes (D)", "level": "1-D"}, {"type": "Hard Modes (D)", "level": "3-C"}, {"type": "Hard Modes (L)", "level": "1-B"}], "file_name": "JEDIKNIGHTCONSULAR"},
{"name": "Jedi Knight Anakin", "locations": [{"type": "Cantina", "level": "7-G"}, {"type": "Hard Modes (L)", "level": "5-C"}], "file_name": "ANAKINKNIGHT"},
{"name": "Jedi Knight Guardian", "locations": [{"type": "Cantina Shop", "cost": "400/5"}, {"type": "Hard Modes (D)", "level": "3-F"}], "file_name": "JEDIKNIGHTGUARDIAN"},
{"name": "Jedi Knight Revan", "locations": [{"type": "Hero's Journey", "name": "Legend of the Old Republic"}], "file_name": "JEDIKNIGHTREVAN"},
{"name": "Jolee Bindo", "locations": [{"type": "Hard Modes (Fleet)", "level": "4-E"}, {"type": "Hard Modes (D)", "level": "6-D"}], "file_name": "JOLEEBINDO"},
{"name": "Juhani", "locations": [{"type": "Hard Modes (L)", "level": "6-A"}], "file_name": "JUHANI"},
{"name": "Jyn Erso", "locations": [{"type": "Guild Shop", "cost": "450/5"}], "file_name": "JYNERSO"},
{"name": "K-2SO", "locations": [{"type": "Guild Event Shop", "cost": "400/5"}, {"type": "GW Shop", "cost": "400/5"}], "file_name": "K2SO"},
{"name": "Kanan Jarrus", "locations": [{"type": "Arena Shop", "cost": "400/5"}, {"type": "Guild Event Shop", "cost": "400/5"}], "file_name": "KANANJARRUSS3"},
{"name": "Ki-Adi-Mundi", "locations": [{"type": "Territory Battle", "name": "Republic Offensive"}], "file_name": "KIADIMUNDI"},
{"name": "Kit Fisto", "locations": [{"type": "Cantina", "level": "4-F"}, {"type": "Guild Shop", "cost": "450/5"}], "file_name": "KITFISTO"},
{"name": "Kylo Ren", "locations": [{"type": "Cantina", "level": "4-C"}, {"type": "Guild Shop", "cost": "450/5"}], "file_name": "KYLOREN"},
{"name": "Kylo Ren (Unmasked)", "locations": [{"type": "Cantina", "level": "3-F"}], "file_name": "KYLORENUNMASKED"},
{"name": "L3-37", "locations": [{"type": "Cantina", "level": "5-A"}], "file_name": "L3_37"},
{"name": "Lando Calrissian", "locations": [{"type": "Cantina", "level": "1-E"}, {"type": "Guild Event Shop", "cost": "400/5"}], "file_name": "ADMINISTRATORLANDO"},
{"name": "Lobot", "locations": [{"type": "Hard Modes (L)", "level": "4-B"}, {"type": "Hard Modes (L)", "level": "5-B"}], "file_name": "LOBOT"},
{"name": "Logray", "locations": [{"type": "Guild Shop", "cost": "450/5"}], "file_name": "LOGRAY"},
{"name": "Luke Skywalker (Farmboy)", "locations": [{"type": "Cantina", "level": "1-B"}, {"type": "Guild Event Shop", "cost": "400/5"}, {"type": "Guild Shop", "cost": "450/5"}, {"type": "Hard Modes (L)", "level": "7-D"}], "file_name": "LUKESKYWALKER"},
{"name": "Luminara Unduli", "locations": [{"type": "GW Shop", "cost": "400/5"}, {"type": "Hard Modes (D)", "level": "2-E"}, {"type": "Hard Modes (L)", "level": "3-D"}], "file_name": "LUMINARAUNDULI"},
{"name": "Mace Windu", "locations": [{"type": "Arena Shop", "cost": "400/5"}, {"type": "Cantina", "level": "4-A"}, {"type": "Fleet Shop", "cost": "400/5"}, {"type": "Hard Modes (L)", "level": "2-E"}], "file_name": "MACEWINDU"},
{"name": "Magmatrooper", "locations": [{"type": "GW Shop", "cost": "400/5"}, {"type": "Guild Event Shop", "cost": "400/5"}], "file_name": "MAGMATROOPER"},
{"name": "Mission Vao", "locations": [{"type": "Cantina", "level": "7-A"}], "file_name": "MISSIONVAO"},
{"name": "Mob Enforcer", "locations": [{"type": "Cantina Shop", "cost": "400/5"}], "file_name": "HUMANTHUG"},
{"name": "Mother Talzin", "locations": [{"type": "Special Event", "name": "Defense of Dathomir"}, {"type": "Hard Modes (L)", "level": "8-A"}], "file_name": "MOTHERTALZIN"},
{"name": "Nightsister Acolyte", "locations": [{"type": "Cantina", "level": "2-A"}, {"type": "Guild Shop", "cost": "450/5"}], "file_name": "NIGHTSISTERACOLYTE"},
{"name": "Nightsister Initiate", "locations": [{"type": "GW Shop", "cost": "400/5"}], "file_name": "NIGHTSISTERINITIATE"},
{"name": "Nightsister Spirit", "locations": [{"type": "Special Event", "name": "Ghosts of Dathomir"}, {"type": "Cantina", "level": "7-F"}], "file_name": "NIGHTSISTERSPIRIT"},
{"name": "Nightsister Zombie", "locations": [{"type": "Special Event", "name": "Ghosts of Dathomir"}, {"type": "Hard Modes (D)", "level": "8-D"}], "file_name": "NIGHTSISTERZOMBIE"},
{"name": "Nute Gunray", "locations": [{"type": "Arena Shop", "cost": "400/5"}], "file_name": "NUTEGUNRAY"},
{"name": "Obi-Wan Kenobi (Old Ben)", "locations": [{"type": "Cantina", "level": "2-F"}, {"type": "Guild Shop", "cost": "450/5"}], "file_name": "OLDBENKENOBI"},
{"name": "Old Daka", "locations": [{"type": "Cantina Shop", "cost": "400/5"}, {"type": "Hard Modes (D)", "level": "4-B"}], "file_name": "DAKA"},
{"name": "Padme Amidala", "locations": [{"type": "Legendary Event", "name": "Aggressive Negotiations"}], "file_name": "PADMEAMIDALA"},
{"name": "Pao", "locations": [{"type": "Cantina Shop", "cost": "400/5"}], "file_name": "PAO"},
{"name": "Paploo", "locations": [{"type": "Cantina", "level": "3-D"}, {"type": "Guild Shop", "cost": "450/5"}], "file_name": "PAPLOO"},
{"name": "Plo Koon", "locations": [{"type": "Cantina", "level": "4-G"}, {"type": "Fleet Shop", "cost": "400/5"}], "file_name": "PLOKOON"},
{"name": "Poe Dameron", "locations": [{"type": "Cantina Shop", "cost": "400/5"}, {"type": "Fleet Shop", "cost": "400/5"}, {"type": "Hard Modes (L)", "level": "7-B"}], "file_name": "POE"},
{"name": "Poggle the Lesser", "locations": [{"type": "GW Shop", "cost": "400/5"}, {"type": "Hard Modes (L)", "level": "4-E"}, {"type": "Hard Modes (L)", "level": "6-E"}], "file_name": "POGGLETHELESSER"},
{"name": "Princess Leia", "locations": [{"type": "Arena Shop", "cost": "400/5"}, {"type": "Guild Event Shop", "cost": "400/5"}], "file_name": "PRINCESSLEIA"},
{"name": "Qi'ra", "locations": [{"type": "Cantina", "level": "3-B"}], "file_name": "QIRA"},
{"name": "Qui-Gon Jinn", "locations": [{"type": "Cantina Shop", "cost": "400/5"}], "file_name": "QUIGONJINN"},
{"name": "R2-D2", "locations": [{"type": "Legendary Event", "name": "Daring Droid"}], "file_name": "R2D2_LEGENDARY"},
{"name": "Range Trooper", "locations": [{"type": "Hard Modes (D)", "level": "3-A"}], "file_name": "RANGETROOPER"},
{"name": "Rebel Officer Leia Organa", "locations": [{"type": "Territory Battle", "name": "Rebel Assault"}], "file_name": "HOTHLEIA"},
{"name": "Resistance Pilot", "locations": [{"type": "Fleet Shop", "cost": "400/5"}, {"type": "GW Shop", "cost": "400/5"}], "file_name": "RESISTANCEPILOT"},
{"name": "Resistance Trooper", "locations": [{"type": "Guild Shop", "cost": "450/5"}, {"type": "Hard Modes (L)", "level": "3-A"}], "file_name": "RESISTANCETROOPER"},
{"name": "Rey (Jedi Training)", "locations": [{"type": "Hero's Journey", "name": "Rey"}], "file_name": "REYJEDITRAINING"},
{"name": "Rey (Scavenger)", "locations": [{"type": "Guild Shop", "cost": "450/5"}, {"type": "Hard Modes (D)", "level": "5-D"}, {"type": "Hard Modes (L)", "level": "2-A"}], "file_name": "REY"},
{"name": "Rose Tico", "locations": [{"type": "Hard Modes (L)", "level": "4-F"}], "file_name": "ROSETICO"},
{"name": "Royal Guard", "locations": [{"type": "Hard Modes (D)", "level": "5-F"}, {"type": "Hard Modes (L)", "level": "1-D"}, {"type": "Guild Event Shop", "cost": "400/5"}], "file_name": "ROYALGUARD"},
{"name": "Sabine Wren", "locations": [{"type": "Hard Modes (D)", "level": "1-A"}], "file_name": "SABINEWRENS3"},
{"name": "Savage Opress", "locations": [{"type": "Arena Shop", "cost": "400/5"}], "file_name": "SAVAGEOPRESS"},
{"name": "Scarif Rebel Pathfinder", "locations": [{"type": "Cantina", "level": "1-D"}, {"type": "Fleet Shop", "cost": "400/5"}, {"type": "Guild Event Shop", "cost": "400/5"}], "file_name": "SCARIFREBEL"},
{"name": "Shaak Ti", "locations": [{"type": "Hard Modes (Fleet)", "level": "5-A"}], "file_name": "SHAAKTI"},
{"name": "Shoretrooper", "locations": [{"type": "Hard Modes (L)", "level": "9-B"}], "file_name": "SHORETROOPER"},
{"name": "Sith Assassin", "locations": [{"type": "Cantina", "level": "6-C"}, {"type": "Guild Shop", "cost": "450/5"}], "file_name": "SITHASSASSIN"},
{"name": "Sith Empire Trooper", "locations": [{"type": "Cantina", "level": "8-B"}], "file_name": "FOSITHTROOPER"},
{"name": "Sith Marauder", "locations": [{"type": "Cantina", "level": "6-E"}], "file_name": "SITHMARAUDER"},
{"name": "Sith Trooper", "locations": [{"type": "Intro P1 (Marquee)", "name": "Emperor's Elite"}], "file_name": "SITHTROOPER"},
{"name": "Snowtrooper", "locations": [{"type": "Cantina", "level": "7-B"}, {"type": "Guild Shop", "cost": "450/5"}, {"type": "Hard Modes (L)", "level": "8-C"}, {"type": "Guild Event Shop", "cost": "400/5"}], "file_name": "SNOWTROOPER"},
{"name": "Stormtrooper", "locations": [{"type": "Cantina Shop", "cost": "400/5"}, {"type": "Hard Modes (L)", "level": "3-C"}, {"type": "Guild Event Shop", "cost": "400/5"}], "file_name": "STORMTROOPER"},
{"name": "Stormtrooper Han", "locations": [{"type": "Arena Shop", "cost": "400/5"}, {"type": "Guild Event Shop", "cost": "400/5"}], "file_name": "STORMTROOPERHAN"},
{"name": "Sun Fac", "locations": [{"type": "Fleet Shop", "cost": "400/5"}, {"type": "Guild Shop", "cost": "450/5"}], "file_name": "SUNFAC"},
{"name": "T3-M4", "locations": [{"type": "Cantina", "level": "6-B"}], "file_name": "T3_M4"},
{"name": "Talia", "locations": [{"type": "Cantina", "level": "1-G"}, {"type": "Guild Shop", "cost": "450/5"}, {"type": "Hard Modes (L)", "level": "2-D"}, {"type": "Hard Modes (L)", "level": "2-F"}], "file_name": "TALIA"},
{"name": "Teebo", "locations": [{"type": "GW Shop", "cost": "400/5"}, {"type": "Hard Modes (D)", "level": "3-D"}, {"type": "Hard Modes (L)", "level": "4-A"}], "file_name": "TEEBO"},
{"name": "TIE Fighter Pilot", "locations": [{"type": "Cantina", "level": "4-B"}, {"type": "Fleet Shop", "cost": "400/5"}, {"type": "Guild Event Shop", "cost": "400/5"}], "file_name": "TIEFIGHTERPILOT"},
{"name": "Tusken Raider", "locations": [{"type": "GW Shop", "cost": "400/5"}, {"type": "Hard Modes (D)", "level": "6-C"}], "file_name": "TUSKENRAIDER"},
{"name": "Tusken Shaman", "locations": [{"type": "Fleet Shop", "cost": "400/5"}, {"type": "Guild Shop", "cost": "450/5"}], "file_name": "TUSKENSHAMAN"},
{"name": "Ugnaught", "locations": [{"type": "Arena Shop", "cost": "400/5"}], "file_name": "UGNAUGHT"},
{"name": "URoRRuR'R'R", "locations": [{"type": "Hard Modes (L)", "level": "5-A"}, {"type": "Hard Modes (L)", "level": "5-F"}], "file_name": "URORRURRR"},
{"name": "Vandor Chewbacca", "locations": [{"type": "Hard Modes (D)", "level": "4-D"}], "file_name": "YOUNGCHEWBACCA"},
{"name": "Veteran Smuggler Chewbacca", "locations": [{"type": "Cantina", "level": "5-F"}], "file_name": "SMUGGLERCHEWBACCA"},
{"name": "Veteran Smuggler Han Solo", "locations": [{"type": "Cantina", "level": "5-E"}], "file_name": "SMUGGLERHAN"},
{"name": "Visas Marr", "locations": [{"type": "Hard Modes (D)", "level": "7-B"}], "file_name": "VISASMARR"},
{"name": "Wampa", "locations": [{"type": "Guild Event Shop", "cost": "1350/5"}], "file_name": "WAMPA"},
{"name": "Wat Tambor", "locations": [{"type": "Territory Battle", "name": "Separatist Might"}], "file_name": "WATTAMBOR"},
{"name": "Wedge Antilles", "locations": [{"type": "Cantina", "level": "6-F"}, {"type": "Fleet Shop", "cost": "400/5"}], "file_name": "WEDGEANTILLES"},
{"name": "Wicket", "locations": [{"type": "Heroic Event", "name": "Endor Escalation"}, {"type": "Hard Modes (D)", "level": "8-A"}], "file_name": "WICKET"},
{"name": "Young Han Solo", "locations": [{"type": "Guild Shop"}], "file_name": "YOUNGHAN"},
{"name": "Young Lando Calrissian", "locations": [{"type": "Hard Modes (Fleet)", "level": "1-D"}], "file_name": "YOUNGLANDO"},
{"name": "Zaalbar", "locations": [{"type": "Hard Modes (L)", "level": "5-D"}, {"type": "Hard Modes (Fleet)", "level": "3-C"}], "file_name": "ZAALBAR"},
{"name": "Zam Wesell", "locations": [{"type": "Fleet Shop", "cost": "400/5"}, {"type": "Guild Shop", "cost": "450/5"}], "file_name": "ZAMWESELL"}]`);

function characterSearch(l,h,name){
  let m;

  while(l <= h){
    m = Math.floor(l + (h - l) / 2);

    if(characters[m].name === name) {
      return m
    }

    if (characters[m].name > name){
      h = m - 1;
    } else {
      l = m + 1;
    }
  }
}

function getLocations(){
  const name = document.getElementById("character_select").value;
  const index = characterSearch(0, characters.length - 1, name);
  const locations = characters[index].locations;
  
  document.getElementById("portrait").src = './img/' + characters[index].file_name + '.jpg';
  
  let h_count = 0;
  let c_count = 0;
  let s = "Locations: ";
  for(let i=0; i<locations.length; i++){
    if(locations[i].type.slice(0, 4) === "Hard") {
      h_count++;
      s += 'H' + locations[i].type[locations[i].type.lastIndexOf('(') + 1] + locations[i].level;
    } else if (locations[i].type === "Cantina") {
      c_count++;
      s += 'C' + locations[i].level;
    } else {
      s += locations[i].type;
    }

    if(i < locations.length - 1) {
      s += ', '
    }
  }
  document.getElementById('name').textContent = "Name: " + name;
  document.getElementById('locations').textContent = s;

  return [h_count, c_count];
}

function genGraph(){
    let node_count;
    let c_count;
    [node_count, c_count] = getLocations();
    const name = document.getElementById("character_select").value;

    console.log(name);
    console.log(node_count);
    console.log(c_count);
    if (!node_count) {
      return;
    }

    const refreshes = parseInt(document.getElementById("refreshesBox").value);
    const cur_lvl = parseInt(document.getElementById("lvlBox").value);
    const goal_lvl = parseInt(document.getElementById("goalBox").value);
    let cur_shards = parseInt(document.getElementById("shardBox").value);
    //const daily_energy = 375 + 120 * 3;
    //const daily_cost = node_count * node_cost * (5 * (1 + refreshes));
    //const daily_attempts = Math.floor(((daily_energy > daily_cost) ? daily_cost : daily_energy) / node_cost);
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
  
    document.getElementById("neededText").textContent = req_shards;
    //document.getElementById("attemptsText").textContent = 'Daily attempts: ' + daily_attempts;
  
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
  
    Plotly.newPlot(graph, data, layout, {responsive: true});
  
  
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
  /*let s = "";
  for(let i=0; i<characters.length; i++){
    s += "<option value=\"" + characters[i].name +"\">"+characters[i].name+"</option>\n"
  }
  console.log(s);*/