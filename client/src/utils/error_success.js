
export const ERR_BAD_VALUES = { text :
    `Il y a une erreur dans votre saisie des valeurs,
     veuillez vérifier vos saisies et réessayer.`
};

export const SUC_MATRIX_ADDED = { text :
    `Ajout effectué !`
};

export const ERR_BAD_NAME = { text :
    `Votre nom de matrice est incorrect ou déjà utilisé.
    Il doit comporter au minimum une lettre, 
    et le premier caractère doit etre une lettre.`
};

export const ERR_BAD_OPERANDS = { text : 
    `Les noms d'une ou plusieurs des matrices saisies
    sont incorrects ou ne sont pas présents dans la librairie de 
    marices. Veuillez vérifier vos saisies ainsi que la librairie`
};

// -------------- ERRORS FOR OPERATIONS CONDITIONS -------------- //

export const ERR_SAME_SIZE = { text : 
    `Pour effectuer cette opération, les 2 matrices choisies doivent être de 
    taille identiques.`
};

export const ERR_MULTIPLY = { text :
    `Pour effectuer cette opération, le nombre de lignes de la seconde matrice
    doit être égal au nombre de colonnes de la première matrice.`
};

export const ERR_SQ_MATRIX = { text :
    `Pour effectuer cette opération, la matrice sélectionnée doit être carrée.
    Le nombre de lignes de la matrice doit être égal au nombre de colonnes.`
};

export const ERR_INVERSE = { text :
    `Pour effectuer cette opération, la matrice sélectionnée doit être carrée
    et son déterminant ne doitr pas être nul.`
};

export const ERR_DIAGONALISE = { text :
    `Pour effectuer cette opération, la matrice sélectionnée doit être carrée
    et diagonalisable.`
};

export const ERR_DIAGONALISE_R = { text :
    `La Matrice n'est pas carrée ou bien n'est pas diagonalisable dans R.`
};

export const ERR_DIAGONALISE_C = { text :
    `La Matrice n'est pas carrée ou bien n'est pas diagonalisable dans C.`
};

export const ERR_LU = { text :
    `La matrice doit être carrée et définie positive pour cette décomposition`
};

export const ERR_QR = { text :
    `Le nombre de lignes de la matrice doit être supérieur ou égal au nombre
    de colonne pour cette décomposition`
};

export const ERR_CHOLESKY = { text :
    `La matrice doit être carrée, symétrique et 
        définie positive pour cette décomposition`
};

// ----------------- EXPORTS ----------------------------- //

export default {
    ERR_BAD_VALUES,
    SUC_MATRIX_ADDED,
    ERR_BAD_NAME,
    ERR_BAD_OPERANDS,
    ERR_SAME_SIZE,
    ERR_MULTIPLY,
    ERR_SQ_MATRIX,
    ERR_INVERSE,
    ERR_DIAGONALISE_R,
    ERR_DIAGONALISE_C,
    ERR_LU,
    ERR_QR,
    ERR_CHOLESKY
};
