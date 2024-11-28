const dictionary = {
  categories: {
    animals: [
      { "id": 1, "english": "Dog", "spanish": "Perro", "example": "The dog is barking.", "example_spanish": "El perro está ladrando." },
      { "id": 2, "english": "Cat", "spanish": "Gato", "example": "The cat is sleeping.", "example_spanish": "El gato está durmiendo." },
      { "id": 3, "english": "Horse", "spanish": "Caballo", "example": "The horse runs fast.", "example_spanish": "El caballo corre rápido." },
      { "id": 4, "english": "Elephant", "spanish": "Elefante", "example": "The elephant is very big.", "example_spanish": "El elefante es muy grande." },
      { "id": 5, "english": "Lion", "spanish": "León", "example": "The lion is the king of the jungle.", "example_spanish": "El león es el rey de la selva." },
      { "id": 6, "english": "Tiger", "spanish": "Tigre", "example": "A tiger has orange fur.", "example_spanish": "Un tigre tiene pelaje naranja." },
      { "id": 7, "english": "Rabbit", "spanish": "Conejo", "example": "The rabbit is eating a carrot.", "example_spanish": "El conejo está comiendo una zanahoria." },
      { "id": 8, "english": "Bird", "spanish": "Pájaro", "example": "The bird is flying in the sky.", "example_spanish": "El pájaro está volando en el cielo." },
      { "id": 9, "english": "Fish", "spanish": "Pez", "example": "The fish swims in the water.", "example_spanish": "El pez nada en el agua." },
      { "id": 10, "english": "Monkey", "spanish": "Mono", "example": "The monkey is swinging from the tree.", "example_spanish": "El mono se está columpiando del árbol." },
      { "id": 11, "english": "Bear", "spanish": "Oso", "example": "The bear is hibernating.", "example_spanish": "El oso está hibernando." },
      { "id": 12, "english": "Giraffe", "spanish": "Jirafa", "example": "The giraffe has a long neck.", "example_spanish": "La jirafa tiene un cuello largo." },
      { "id": 13, "english": "Snake", "spanish": "Serpiente", "example": "The snake is slithering on the ground.", "example_spanish": "La serpiente se desliza por el suelo." },
      { "id": 14, "english": "Wolf", "spanish": "Lobo", "example": "The wolf howls at the moon.", "example_spanish": "El lobo aúlla a la luna." },
      { "id": 15, "english": "Kangaroo", "spanish": "Canguro", "example": "The kangaroo jumps very high.", "example_spanish": "El canguro salta muy alto." }
    ],
    fruits: [
      { "id": 1, "english": "Apple", "spanish": "Manzana", "example": "I eat an apple every day.", "example_spanish": "Como una manzana todos los días." },
      { "id": 2, "english": "Banana", "spanish": "Plátano", "example": "She loves eating bananas.", "example_spanish": "A ella le encanta comer plátanos." },
      { "id": 3, "english": "Grape", "spanish": "Uva", "example": "Grapes are my favorite fruit.", "example_spanish": "Las uvas son mi fruta favorita." },
      { "id": 4, "english": "Orange", "spanish": "Naranja", "example": "I drink orange juice every morning.", "example_spanish": "Bebo jugo de naranja todas las mañanas." },
      { "id": 5, "english": "Strawberry", "spanish": "Fresa", "example": "The strawberry is sweet and juicy.", "example_spanish": "La fresa es dulce y jugosa." },
      { "id": 6, "english": "Pineapple", "spanish": "Piña", "example": "The pineapple is very tropical.", "example_spanish": "La piña es muy tropical." },
      { "id": 7, "english": "Lemon", "spanish": "Limón", "example": "I use lemon to make lemonade.", "example_spanish": "Uso limón para hacer limonada." },
      { "id": 8, "english": "Peach", "spanish": "Durazno", "example": "The peach is soft and fuzzy.", "example_spanish": "El durazno es suave y peludo." },
      { "id": 9, "english": "Watermelon", "spanish": "Sandía", "example": "Watermelon is perfect for summer.", "example_spanish": "La sandía es perfecta para el verano." },
      { "id": 10, "english": "Cherry", "spanish": "Cereza", "example": "Cherries are red and delicious.", "example_spanish": "Las cerezas son rojas y deliciosas." },
      { "id": 11, "english": "Mango", "spanish": "Mango", "example": "I love eating mangoes when they're ripe.", "example_spanish": "Me encanta comer mangos cuando están maduros." },
      { "id": 12, "english": "Blueberry", "spanish": "Arándano", "example": "Blueberries are great in smoothies.", "example_spanish": "Los arándanos son geniales en batidos." },
      { "id": 13, "english": "Plum", "spanish": "Ciruela", "example": "A plum is sweet and juicy.", "example_spanish": "Una ciruela es dulce y jugosa." },
      { "id": 14, "english": "Papaya", "spanish": "Papaya", "example": "Papaya is popular in tropical countries.", "example_spanish": "La papaya es popular en países tropicales." },
      { "id": 15, "english": "Avocado", "spanish": "Aguacate", "example": "I love making guacamole with avocado.", "example_spanish": "Me encanta hacer guacamole con aguacate." }
    ],
    colors: [
      { "id": 1, "english": "Red", "spanish": "Rojo", "example": "The apple is red.", "example_spanish": "La manzana es roja." },
      { "id": 2, "english": "Blue", "spanish": "Azul", "example": "The sky is blue.", "example_spanish": "El cielo es azul." },
      { "id": 3, "english": "Green", "spanish": "Verde", "example": "The grass is green.", "example_spanish": "La hierba es verde." },
      { "id": 4, "english": "Yellow", "spanish": "Amarillo", "example": "The sun is yellow.", "example_spanish": "El sol es amarillo." },
      { "id": 5, "english": "Black", "spanish": "Negro", "example": "The cat is black.", "example_spanish": "El gato es negro." },
      { "id": 6, "english": "White", "spanish": "Blanco", "example": "The snow is white.", "example_spanish": "La nieve es blanca." },
      { "id": 7, "english": "Pink", "spanish": "Rosa", "example": "She is wearing a pink dress.", "example_spanish": "Ella lleva un vestido rosa." },
      { "id": 8, "english": "Purple", "spanish": "Morado", "example": "The grapes are purple.", "example_spanish": "Las uvas son moradas." },
      { "id": 9, "english": "Orange", "spanish": "Naranja", "example": "The pumpkin is orange.", "example_spanish": "La calabaza es naranja." },
      { "id": 10, "english": "Brown", "spanish": "Marrón", "example": "The dog has a brown coat.", "example_spanish": "El perro tiene un pelaje marrón." },
      { "id": 11, "english": "Gray", "spanish": "Gris", "example": "The clouds are gray.", "example_spanish": "Las nubes son grises." },
      { "id": 12, "english": "Gold", "spanish": "Oro", "example": "She has a gold necklace.", "example_spanish": "Ella tiene un collar de oro." },
      { "id": 13, "english": "Silver", "spanish": "Plata", "example": "He has a silver watch.", "example_spanish": "Él tiene un reloj de plata." },
      { "id": 14, "english": "Beige", "spanish": "Beige", "example": "The walls are beige.", "example_spanish": "Las paredes son beige." },
      { "id": 15, "english": "Turquoise", "spanish": "Turquesa", "example": "The sea is turquoise.", "example_spanish": "El mar es turquesa." }
    ],
    physical_descriptions: [
      { "id": 1, "english": "Tall", "spanish": "Alto", "example": "He is tall and thin.", "example_spanish": "Él es alto y delgado." },
      { "id": 2, "english": "Short", "spanish": "Bajo", "example": "She is short but strong.", "example_spanish": "Ella es baja pero fuerte." },
      { "id": 3, "english": "Slim", "spanish": "Delgado", "example": "He has a slim body.", "example_spanish": "Él tiene un cuerpo delgado." },
      { "id": 4, "english": "Chubby", "spanish": "Gordito", "example": "The baby is chubby.", "example_spanish": "El bebé es gordito." },
      { "id": 5, "english": "Muscular", "spanish": "Musculoso", "example": "The man is muscular.", "example_spanish": "El hombre es musculoso." },
      { "id": 6, "english": "Curly", "spanish": "Rizado", "example": "She has curly hair.", "example_spanish": "Ella tiene el pelo rizado." },
      { "id": 7, "english": "Straight", "spanish": "Liso", "example": "His hair is straight.", "example_spanish": "Su cabello es liso." },
      { "id": 8, "english": "Blond", "spanish": "Rubio", "example": "She has blond hair.", "example_spanish": "Ella tiene el pelo rubio." },
      { "id": 9, "english": "Brunette", "spanish": "Castaño", "example": "He is a brunette.", "example_spanish": "Él es castaño." },
      { "id": 10, "english": "Bald", "spanish": "Calvo", "example": "He is bald.", "example_spanish": "Él es calvo." },
      { "id": 11, "english": "Fair-skinned", "spanish": "Piel clara", "example": "She is fair-skinned.", "example_spanish": "Ella tiene la piel clara." }
    ],
    skills: [
      { "id": 1, "english": "Read", "spanish": "Leer", "example": "She can read very well.", "example_spanish": "Ella puede leer muy bien." },
      { "id": 2, "english": "Write", "spanish": "Escribir", "example": "He writes stories.", "example_spanish": "Él escribe historias." },
      { "id": 3, "english": "Speak", "spanish": "Hablar", "example": "She speaks English fluently.", "example_spanish": "Ella habla inglés con fluidez." },
      { "id": 4, "english": "Listen", "spanish": "Escuchar", "example": "He listens to music every day.", "example_spanish": "Él escucha música todos los días." },
      { "id": 5, "english": "Understand", "spanish": "Entender", "example": "She understands Spanish.", "example_spanish": "Ella entiende español." }
    ],
    verbs: [
      { "id": 1, "english": "Run", "spanish": "Correr", "example": "I run every morning.", "example_spanish": "Corro todas las mañanas." },
      { "id": 2, "english": "Jump", "spanish": "Saltar", "example": "The cat jumps high.", "example_spanish": "El gato salta alto." },
      { "id": 3, "english": "Eat", "spanish": "Comer", "example": "They eat dinner together.", "example_spanish": "Ellos cenan juntos." },
      { "id": 4, "english": "Sleep", "spanish": "Dormir", "example": "She sleeps early.", "example_spanish": "Ella duerme temprano." },
      { "id": 5, "english": "Work", "spanish": "Trabajar", "example": "He works in an office.", "example_spanish": "Él trabaja en una oficina." }
    ]
  }
}
