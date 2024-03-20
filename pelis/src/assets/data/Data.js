import p1 from './img/1.jpg';
import p2 from './img/2.webp';
import p3 from './img/3.jpg';
import p4 from './img/4.jpg';
import p5 from './img/5.jpg';
import p6 from './img/6.jpg';
import p7 from './img/7.jpg';
import p8 from './img/8.webp';
import p9 from './img/9.webp';
import p10 from './img/10.webp';
import p11 from './img/11.jpg';
import p12 from './img/12.jpg';
import p13 from './img/13.jpg';
import p14 from './img/14.jpg';
import p15 from './img/15.webp';
import p16 from './img/16.webp';
import p17 from './img/17.webp';
import p18 from './img/18.jpg';
import p19 from './img/19.jpg';
import p20 from './img/20.webp';
import p21 from './img/21.jpg';
import p22 from './img/22.webp';
import p23 from './img/23.webp';
import p24 from './img/24.jpg';
import p25 from './img/25.jpg';
import p26 from './img/26.webp';
import p27 from './img/27.webp';
import p28 from './img/28.jpg';
import p29 from './img/29.jpg';
import p30 from './img/30.jpg'; 
import p31 from './img/31.jpg';
import p32 from './img/32.jpg';
import p33 from './img/33.jpg';
import p34 from './img/34.jpg';
import p35 from './img/35.webp';
import p36 from './img/36.jpg';
import p37 from './img/37.webp';
import p38 from './img/38.jpg';
import p39 from './img/39.jpg';
import p40 from './img/40.webp';
import p41 from './img/41.webp';
import p42 from './img/42.webp';
import p43 from './img/43.webp';
import p44 from './img/44.jpg';
import p45 from './img/45.jpg';
import p46 from './img/46.webp';
import p47 from './img/47.webp';
import p48 from './img/48.jpg';


const moviesData = [
    {
        id: 1,
        title: 'The Waterboy (El aguador)',
        year: '1998',
        director: 'Frank Coraci',
        genre: ['Comedia'],
        protagonists: ['Adam Sandler', 'Kathy Bates', 'Rob Schneider', 'Henry Winkler'],
        description: 'Un entrenador de fútbol americano encauza y usa la ira de un joven simple, para llevar a su equipo hacia la victoria.',
        platform: 'Star +',
        ageRating: 'APT',
        image: p1,
    },
    {
        id: 2,
        title: 'Gigoló por accidente',
        year: '1999',
        director: 'Mike Mitchell (V)',
        genre: 'Comedia',
        protagonists: ['Rob Schneider', 'Jackie Sandler', 'William Forsythe'],
        description: 'Deuce Bigalow trabaja de limpiador en un acuario hasta que, accidentalmente, rompe un costoso tanque de peces y lo despiden. Con el objetivo de conseguir dinero de forma rápida y poder pagar su deuda, se ve obligado a trabajar de gigoló.',
        platform: ' - ',
        ageRating: '+ 18',
        image: p2,
    },
    {
        id: 3,
        title: 'Un papá genial',
        year: '1999',
        director: 'Dennis Dugan',
        genre: 'Comedia',
        protagonists: ['Adam Sandler', 'Joey Lauren Adams', 'Jon Stewart'],
        description: 'Un irresponsable neoyorquino trata de darle estabilidad a su vida al adoptar a un niño rebelde de cinco años.',
        platform: 'Apple TV',
        ageRating: 'ATP',
        image: p3,
    },
    {
        id: 4,
        title: 'Little Nicky',
        year: '2000',
        director: 'Steven Brill',
        genre: 'Comedia',
        protagonists: ['Adam Sandler', 'Patricia Arquette', 'Quentin Trantino'],
        description: 'El hijo bondadoso del diablo debe recuperar a sus dos hermanos malvados antes de que extiendan el infierno en la Tierra.',
        platform: 'Apple TV',
        ageRating: '+ 7',
        image: p4,
    },
    {
        id: 5,
        title: 'Mr. Deeds',
        year: '2002',
        director: 'Steven Brill',
        genre: 'Comedia',
        protagonists: ['Adam Sandler', 'Steve Buscemi', 'Winona Ryder'],
        description: 'Una reportera intenta crear un escándalo que involucra al bondadoso heredero de la fortuna de un magnate de los medios.',
        platform: 'Apple TV',
        ageRating: 'ATP',
        image: p5,
    },
    {
        id: 6,
        title: 'Estoy hecho un animal',
        year: '2001',
        director: 'Luke Greenfield',
        genre: 'Comedia',
        protagonists: ['Adam Sandler', 'Rob Schneider', 'Colleen Haskell', 'John C. McGinley'],
        description: 'Tras recibir varios trasplantes de animales, un hombre comienza a adquirir comportamientos de las criaturas que le donaron órganos.',
        platform: ['Netflix', 'Apple TV', 'Star +'],
        ageRating: 'ATP',
        image: p6,
    },
    {
        id: 7,
        title: 'La sucia historia de Joe Guarro',
        year: '2001',
        director: 'Dennie Gordon',
        genre: 'Comedia',
        protagonists: ['David Spade', 'Brittany Daniel'],
        description: 'Un aseador desgreñado entretiene a un locutor con la triste historia de su búsqueda por los padres que lo abandonaron.',
        platform: 'Apple TV',
        ageRating: '+ 13',
        image: p7,
    },

    { id: 8, title: 'Los caraconos', year: '1993', director: 'Steve Barron', genre: ['Comedia', 'Ciencia Ficcion'], protagonists: ['Dan Aykroyd', 'Jane Curtin', 'Michelle Burke', 'Adam Sandler'], description: 'Dos extraterrestres que tienen el propósito de invadir la Tierra sufren un accidente y se ven forzados a integrarse en la sociedad para pasar desapercibidos.', platform: ['YouTube', 'Apple TV'], ageRating: '-', image: p8, },

    { id: 9, title: 'Un día de locos', year: '1994', director: 'Nora Ephron', genre: ['Comedia', 'Suspenso'], protagonists: ['Steve Martin', 'Adam Sandler', 'Juliette Lewis', 'Liev Schreiber'], description: 'El propietario (Steve Martin) de una línea telefónica de auxilio recibe una notificación de desalojo en plena Navidad.', platform: ['Claro'], ageRating: '-', image: p9, },

    { id: 10, title: 'Cabezas huecas', year: '1994', director: 'Michael Lehmann', genre: ['Comedia', 'Musical'], protagonists: ['Adam Sandler', 'Brendan Fraser', 'Steve Buscemi', 'Amy Locane'], description: 'Unos músicos hambrientos de publicidad llaman la atención de la prensa secuestrando al personal de una radiodifusora.', platform: ' - ', ageRating: '+ 18', image: p10, },

    { id: 11, title: 'Billy Madison', year: '1995', director: 'Tamra Davis', genre: ['Comedia'], protagonists: ['Adam Sandler', 'Norm Macdonald', 'Bridgette Wilson', 'Bradley Whitford'], description: 'El hijo adulto de un magnate tiene que regresar a la escuela primaria si no quiere perder la herencia de su padre.', platform: ['Claro', 'Apple TV'], ageRating: '-', image: p11, },

    { id: 12, title: 'Happy Gilmore', year: '1996', director: 'Dennis Dugan', genre: ['Comedia', 'Deporte'], protagonists: ['Julie Bowen', 'Carl Weathers', 'Adam Sandler', 'Richard Kiel', 'Bob Barker'], description: 'Un jugador de hockey triunfa al utilizar su famoso movimiento y su temperamento en los campos profesionales de golf.', platform: ['Apple TV', 'Claro'], ageRating: '-', image: p12, },

    { id: 13, title: 'A prueba de balas', year: '1996', director: 'Ernest R. Dickerson', genre: ['Accion', 'Comedia'], protagonists: ['Adam Sandler', 'Damon Wayans', 'James Caan'], description: 'Archie Moses descubre que su compañero en el crimen, Rock Keats, es un policía infiltrado. Pronto, los antiguos amigos se verán involucrados en una serie de acontecimientos que pondrán a prueba su amistad.', platform: ['Apple TV'], ageRating: '-', image: p13, },

    { id: 14, title: 'Trabajo Sucio', year: '1998', director: 'Bob Saget', genre: ['Comedia'], protagonists: ['Adam Sandler', 'Norman Mcdonald', 'Artie Lange'], description: 'Mitch y Sam son dos amigos incapaces de mantener un puesto de trabajo y nefastos en el mundo amoroso, así que deciden ofrecer sus servicios para ejecutar venganzas a cambio de dinero.', platform: ['Apple TV'], ageRating: '+ 13', image: p14, },

    { id: 15, title: 'El chico ideal', year: '1998', director: 'Frank Coraci', genre: ['Comedia'], protagonists: ['Adam Sandler', 'Drew Barrymore', 'Chirstine Taylor'], description: 'Un cantante de bodas desilusionado y una compasiva camarera buscan al verdadero amor durante los años 80.', platform: ['Apple TV', 'HBO MAX'], ageRating: 'APT', image: p15, },

    { id: 16, title: '¡Este cuerpo no es el mío!', year: '2002', director: 'Tom Brady', genre: ['Comedia'], protagonists: ['Rob Schneider', 'Rachel McAdams', 'Anna Faris'], description: 'Una adolescente, muy popular y atractiva pero cruel, se despierta un día dentro del cuerpo de un hombre. Mientras intenta volver a la normalidad, se da cuenta de lo mal que se ha portado con los demás hasta ese momento.', platform: ['Star +'], ageRating: '+ 7', image: p16, },

    { id: 17, title: 'Punch-drunk love', year: '2002', director: 'Paul Thomas Anderson', genre: ['Comedia'], protagonists: ['Adam Sandler', 'Philip Seymour', 'Emily Watson', 'Luis Guzman'], description: 'Barry, un hombre solitario y poco sociable, se educó sobreprotegido por sus siete hermanos. Desafortunado en el amor, se apasiona por una mujer misteriosa a quien conoce a través de su hermana, pero su vida se complica cuando intentan extorsionarlo.', platform: ['Claro', 'Apple TV', 'Flow'], ageRating: '+ 13', image: p17, },

    { id: 18, title: 'Ejecutivo agresivo', year: '2003', director: 'Peter Segal', genre: ['Comedia'], protagonists: ['Adam Sandler', 'Jack Nicholson', 'Woody Harrelson', 'January Jones', 'Marisa Tomei'], description: 'Tras un malentendido a bordo de un avión, un hombre es condenado a asistir a las terapias del poco ortodoxo doctor Buddy Rydell para controlar su mal carácter.', platform: ['HBO MAX', 'YouTube', 'Apple TV', 'Claro'], ageRating: '+ 13', image: p18, },

    { id: 19, title: '50 Primeras Citas', year: '2004', director: 'Peter Segal', genre: ['Comedia'], protagonists: ['Adam Sandler', 'Drew Barrymore', 'Rob Schneider', 'Peter Segal', 'Lusia Strus'], description: 'Henry, biólogo marino, no tiene la mínima intención de comprometerse con nadie, hasta que conoce a Lucy, la chica de sus sueños. Sin embargo, hay un pequeño problema, la joven se levanta cada mañana sin recordar absolutamente nada del día anterior.', platform: ['Claro', 'Apple TV'], ageRating: '+ 7', image: p19, },

    { id: 20, title: 'Spanglish', year: '2005', director: 'James L. Brooks', genre: ['Comedia'], protagonists: ['Adam Sandler', 'Tea Leoni', 'Paz Vega', 'Cloris Leachman'], description: 'Una madre soltera emigra de México y se convierte en la empleada doméstica de un reconocido chef y de su neurótica esposa.', platform: ['Claro', 'YouTube', 'Apple TV'], ageRating: '+ 13', image: p20, },

    { id: 21, title: 'Golpe bajo: el juego final', year: '2005', director: 'Peter Segal', genre: ['Comedia', 'Deporte'], protagonists: ['Burt Reynolds', 'Adam Sandler', 'Chris Rock', 'Ed Lauter', 'Bob Sapp', 'The Great Khali'], description: 'En una cárcel de Texas, veteranos de la NFL entrenan a sus compañeros para un juego contra los guardias del penal.', platform: ['Claro', 'Amazon', 'Apple TV', 'Netflix'], ageRating: '+ 13', image: p21, },

    { id: 22, title: 'Click', year: '2005', director: 'Frack Coraci', genre: ['Comedia'], protagonists: ['Adam Sandler', 'Kate Beckinsale', 'Frank Coraci', 'Christopher Walken'], description: 'Un arquitecto que trabaja demasiado consigue un control remoto universal que le permite adelantar, retrasar y detener el mundo que lo rodea. Las complicaciones se presentan cuando el artefacto empieza a fallar y adelanta la vida del arquitecto a su manera.', platform: ['Amazon', 'Claro', 'Apple TV'], ageRating: '+ 7', image: p22, },

    { id: 23, title: 'Yo los Declaro Marido y Larry', year: '2007', director: 'Dennis Dugan', genre: ['Comedia'], protagonists: ['Adam Sandler', 'Kevin James', 'Jessica Biel', 'Steve Buscemi'], description: 'Chuck Levine y Larry Valentine son bomberos y muy buenos amigos. Cuando Larry, un hombre viudo, descubre que no puede nombrar a sus niños como los beneficiarios de la póliza de su seguro de vida, necesita un gran favor de Chuck: su firma como pareja. Los amigos inesperadamente se convierten en noticia y deben llevar su plan al extremo cuando un burócrata sospecha de la veracidad de su relación.', platform: ['Claro', 'Apple TV'], ageRating: '+ 13', image: p23, },

    { id: 24, title: 'La esperanza vive en mi', year: '2007', director: 'Mike Binder', genre: ['Comedia'], protagonists: ['Adam Sandler', 'Don Cheadle', 'Mike Binder', 'Jada Pinkett Smith'], description: 'Charlie Fineman (Adam Sandler), quien perdió a su familia en los ataques terroristas del 11 de septiembre, aún sufre por sus muertes. Él se encuentra con su ex-compañero de la universidad, Alan Johnson (Don Cheadle), y los dos recuerdan su amistad.', platform: ['Apple TV', 'YouTube'], ageRating: '+ 13', image: p24, },

    { id: 25, title: 'Cuentos que no son cuentos', year: '2008', director: 'Adam Shankram', genre: ['Comedia'], protagonists: ['Adam Sandler', 'Russell Brand', 'Keri Russell'], description: 'Skeeter Bronson, empleado de un hotel, recibe una sorpresa inesperada cuando descubre que las historias que les ha contado a sus sobrinos se están volviendo reales. Con la esperanza de sacar ventaja del misterioso fenómeno, Skeeter comete varios errores y las contribuciones inesperadas de los niños enloquecen la vida de Skeeter.', platform: ['Disney'], ageRating: 'ATP', image: p25, },

    { id: 26, title: 'No te metas con Zohan', year: '2008', director: 'Dennis Dugan', genre: ['Comedia'], protagonists: ['Adam Sandler', 'Emmanuelle Chriqui', 'Laine Kazan', 'Rob Schneider'], description: 'Cansado de todas las luchas en su país, un legendario militar israelí llamado Zohan finge su propia muerte y viaja a la ciudad de Nueva York, donde puede cumplir su gran sueño: convertirse en un estilista. El atrevimiento con el que Zohan corta y peina el cabello lo convierten en un éxito entre las mujeres de Manhattan, pero, cuando su enemigo lo localiza, Zohan tendrá que usar sus habilidades militares si quiere volver a utilizar las tijeras.', platform: ['Apple TV', 'Claro', 'Amazon'], ageRating: '+ 13', image: p26, },

    { id: 27, title: 'Siempre hay tiempo para reír', year: '2009', director: 'Judd Apatow', genre: ['Comedia'], protagonists: ['Seth Rogen', 'Adam Sandler', 'Leslie Mann', 'Erick Bana', 'Jonah Hill', 'Aubrey Plaza'], description: 'Un cómico enfermo de gravedad acoge bajo su protección a un artista en apuros, después de esto tiene la oportunidad de evaluar nuevamente su vida cuando su enfermedad comienza a remitir.', platform: ['Apple TV', 'Claro', 'YouTube', 'HBO MAX'], ageRating: '+ 13', image: p27, },

    { id: 28, title: 'Son como niños', year: '2010', director: 'Dennis Dugan', genre: ['Comedia'], protagonists: ['Adam Sandler', 'Cameron Boyce', 'Steve Buscemi', 'Chris Rock', 'Kevin James', 'David Spade', 'Rob Schneider', 'Salma Hayek'], description: 'Un grupo de amigos y excompañeros descubren que envejecer no siempre significa madurar cuando se reúnen para honrar la memoria de su entrenador de baloncesto.', platform: ['Claro', 'Applet TV', 'Netflix'], ageRating: 'ATP', image: p28, },

    { id: 29, title: 'Una esposa de mentira', year: '2011', director: 'Dennis Dugan', genre: ['Comedia', 'Romance'], protagonists: ['Adam Sandler', 'Jennifer Aniston', 'Brooklyn Decker', 'Bailee Madison', 'Nicole Kidman', 'Nick Swardson'], description: 'El cirujano Danny decide contratar a su ayudante Katherine, una madre soltera con hijos, para que finjan ser su familia. Su intención es demostrarle a Palmer que su amor por ella es tan grande que está a punto de divorciarse de su mujer.', platform: ['Netflix', 'Apple TV', 'Amazon', 'Claro', 'Paramount'], ageRating: 'ATP', image: p29, },

    { id: 30, title: 'Jack y Jill', year: '2011', director: 'Dennis Dugan', genre: ['Comedia'], protagonists: ['Adam Sandler', 'Rob Schneider', 'Al Pacino', 'Johnny Depp', 'Katie holmes', 'Nick Swardson', 'David Spade'], description: 'La vida de un exitoso y feliz ejecutivo de publicidad termina en un caos cuando su exigente hermana gemela pasivo-agresiva realiza su visita anual del Día de Acción de Gracias.', platform: ['Amazon', 'Claro', 'Apple TV', 'YouTube'], ageRating: 'ATP', image: p30, },

    { id: 31, title: 'Ese es mi hijo', year: '2012', director: 'Sean Anders', genre: ['Comedia'], protagonists: ['Adam Sandler', 'Dan Patrick', 'Andy Samberg', 'Nick Swardson', 'Jackie Sandler'], description: 'Durante su adolescencia, Donny tiene un hijo llamado Todd al que cría como padre soltero hasta los 18 años. Luego de varios años sin verse, el mundo de Todd se derrumba cuando Donny aparece en su boda sin ser invitado.', platform: ['Netflix', 'Apple TV'], ageRating: '+ 18', image: p31, },

    { id: 32, title: 'Son como niños 2', year: '2013', director: 'Dennis Dugan', genre: ['Comedia'], protagonists: ['Adam Sandler', 'Andy Samberg', 'Kevin James', 'David Spade', 'Chris Rock', 'Salma Hayek', 'Taylor Launter', 'Cameron Boyce', 'Steve Buscemi', 'Nick Swardson', 'Jackie Sandler', 'Rob Schneider'], description: 'Tres años después de la reunión que volvió a unirlo a sus amigos de la infancia, Lenny Feder regresa junto a su familia a su pueblo natal para poder estar más cerca de sus amigos.', platform: ['Netflix', 'Apple TV', 'Amazon', 'HBO MAX', 'Claro'], ageRating: '+ 16', image: p32, },

    { id: 33, title: 'Luna de miel en familia', year: '2014', director: 'Frank Coraci', genre: ['Comedia', 'Romance'], protagonists: ['Adam Sandler', 'Drew Barrymore', 'Bella Thorne', 'Terry Crews', 'Joel McHale', 'Jackie Sandler', 'Kevin Nealon'], description: 'Poco después de que una cita a ciegas acaba con resultados desastrosos, dos padres solteros y sus niños terminan atrapados juntos en un centro turístico africano.', platform: ['Claro', 'Apple TV', 'HBO MAX'], ageRating: 'ATP', image: p33, },

    { id: 34, title: 'Top five', year: '2014', director: 'Chris Rock', genre: ['Comedia'], protagonists: ['Chris Rock', 'Adam Sandler'], description: 'A pesar de que él inició en la comedia de pie, Andre Allen logró el éxito como la estrella de una trilogía de comedias de acción acerca de un oso parlanchín. Andre es obligado a pasar el día con Chelsea una escritora del New York Times, cuya crítica de cine proyectó la pasión de Andre acerca de la revolución de Haití. Inesperadamente, Andre se abre ante Chelsea, y mientras recorren Nueva York, Andre intenta ponerse en contacto nuevamente con sus raíces cómicas.', platform: ['Apple TV'], ageRating: '-', image: p34, },

    { id: 35, title: 'Zapatero a tus zapatos', year: '2014', director: 'Tom McCarthy', genre: ['Comedia'], protagonists: ['Adam Sandler', 'Steve Buscemi'], description: 'Un zapatero frustrado se encuentra una máquina de coser mágica que le permite ver el mundo de una nueva manera por entrar en la vida de sus clientes.', platform: ['Amazon', 'Claro', 'Apple TV'], ageRating: '+ 12', image: p35, },

    { id: 36, title: 'Hombres, mujeres y niños', year: '2014', director: 'Jason Reitman', genre: ['Comedia'], protagonists: ['Jennifer Garner', 'Adam Sandler', 'Rosemarie DeWitt'], description: 'Adolescentes y sus padres intentan ordenar las muchas formas en las que Internet ha cambiado sus relaciones, sus formas de comunicación y su auto-imagen.', platform: ['Apple TV'], ageRating: '+ 16', image: p36, },

    {  id: 37, title: 'The Ridiculous 6',year: '2015',director:'Frank Coraci' ,genre:['Comedia'] ,protagonists: ['Adam Sandler', 'Jackie Sandler', 'Taylor Lautner', 'Rob Schneider', 'Steve Buscemi', 'Terry Crews', 'David Spade', 'Nick Swardson'],description:'Cuando secuestran a su padre, Tommy "Cuchillo Blanco" Stockburn se aventura por el Oeste en una misión de rescate con cinco hermanos que acaba de conocer.' ,platform: ['Netflix'],ageRating: '-',image: p37, },

    { id: 38, title: 'Pixeles', year: '2015', director: 'Chris Columbus', genre: ['Comedia', 'Ciencia Ficcion'], protagonists: ['Josh Gad', 'Adam Sandler', 'Jackie Sandler', 'Kevin James', 'Michelle Monagham'], description: 'Un mecánico de televisión, un criminal y un teórico de la conspiración, todos ellos amigos del presidente y antiguos jugadores de élite de videojuegos, son reclutados por el presidente para ayudar a salvar al país.', platform: ['Netflix'], ageRating: '+ 7', image: p38, },

    { id: 39, title: 'The Do Over', year: '2016', director: 'Steve Brill', genre: ['Comedia'], protagonists: ['Adam Sandler', 'David Spade', 'Paula Patton', 'Nick Swardson', 'Jackie Sandler', 'Kathrin Hahn'], description: 'La vida de un gerente de banco da un vuelco cuando un amigo del pasado lo manipula para que finja su propia muerte y viva una aventura completamente nueva.', platform: ['Netflix'], ageRating: '-', image: p39, },

    { id: 40, title: 'Sandy Wexler', year: '2017', director: 'Frank Coraci', genre: ['Comedia'], protagonists: ['Adam Sandler', 'Chris Rock', 'Kevin James', 'Jennifer Hudson', 'Rob Schneider', 'Terry Crews', 'Nick Swardson', 'David Spade', 'Jackie Sandler', 'Henry Winkler'], description: 'En Los Ángeles, durante la década de 1990, Sandy Wexler, un agente de artistas que vive para su trabajo, se enamora perdidamente de Courtney Clarke, una cantante de mucho talento a quien descubrió en un parque de diversiones.', platform: ['Netflix'], ageRating: '-', image: p40, },

    { id: 41, title: 'La peor semana', year: '2018', director: 'Robert Smigel', genre: ['Comedia'], protagonists: ['Adam Sandler', 'Chris Rock', 'Jackie Sandler', 'Eric Lamonsoff', 'Maury Ginsberg', 'Steve Buscemi'], description: 'Dos padres con personalidades opuestas se reúnen para celebrar la boda de sus hijos. Se ven obligados a pasar la semana más larga de sus vidas juntos.', platform: ['Netflix'], ageRating: '-', image: p41, },

    { id: 42, title: 'Diamantes en bruto', year: '2019', director: 'Ben Safdie', genre: ['Comedia', 'Suspenso'], protagonists: ['Adam Sandler', 'Julias Fox', 'Kevin Garnett'], description: 'Un carismático joyero hace una apuesta de alto riesgo que podría conducir a una ganancia inesperada, pero antes debe lograr un equilibrio entre las empresas, la familia y los adversarios.', platform: ['Netflix'], ageRating: '-', image: p42, },

    { id: 43, title: 'Misterio a bordo', year: '2019', director: 'Kyle Newacheck', genre: ['Comedia'], protagonists: ['Adam Sandler', 'Jennifer Aniston', 'Jackie Sandler'], description: 'Un policía de Nueva York y su esposa se van de vacaciones a Europa para revitalizar el amor en su matrimonio. Un encuentro casual los lleva a ser acusados del asesinato de un billonario anciano.', platform: ['Netflix'], ageRating: '-', image: p43, },

    { id: 44, title: 'El Halloween de Hubie', year: '2020', director: 'Steve Brill', genre: ['Comedia'], protagonists: ['Adam Sandler', 'Jackie Sandler', 'Karan Brar'], description: 'Es 31 de octubre en Salem, Massachusetts, y el excéntrico y devoto voluntario de la comunidad y víctima de las burlas, se encuentra en medio de una investigación de un asesinato.', platform: ['Netflix'], ageRating: '-', image: p44, },

    { id: 45, title: 'Misterio a la vista', year: '2023', director: 'Jeremy Garelick', genre: ['Comedia'], protagonists: ['Jennifer Aniston', 'Adam Sandler', 'Enrique Arce'], description: 'Tras haber abierto su propia agencia, Nick y Audrey Spitz se ven involucrados en un conflicto internacional cuando un amigo es secuestrado durante su boda.', platform: ['Netflix'], ageRating: '-', image: p45, },

    { id: 46, title: 'Garra', year: '2022', director: 'Jeremiah Zagar', genre: ['Comedia', 'Deporte'], protagonists: ['Adam Sandler', 'Juancho Hernangomez', 'Luka Doncic'], description: 'Un cazatalentos de baloncesto sin suerte descubre a un jugador extraordinario en Madrid y lo lleva a los Estados Unidos sin haber recibido una autorización previa del equipo para el que trabaja.', platform: ['Netflix'], ageRating: '-', image: p46, },

    { id: 47, title: '¡No estás invitada a mi bat mitzvah!', year: '2023', director: 'Sammi Cohen', genre: ['Comedia'], protagonists: ['Adam Sandler', 'Jackie Sandler'], description: 'Las amigas Stacy y Lydia preparan dos fiestas de bat mitzvá épicas. Sin embargo, todo se complica cuando un chico popular y un drama escolar se interponen en su amistad.', platform: ['Netflix'], ageRating: '-', image: p47, },

    { id: 48, title: 'El astronauta', year: '2024', director: 'Johan Renck', genre: ['Comedia', 'Cienci Ficcion'], protagonists: ['Adam Sandler', 'Jackie Sandler'], description: 'Jakub Procházka fue criado por sus abuelos en la campiña checa tras ser abandonado de pequeño. Trabajó como científico antes de intentar convertirse en el primer astronauta de la República Checa.', platform: ['Netflix'], ageRating: '-', image: p48, }




];

export default moviesData;