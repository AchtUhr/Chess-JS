function afficherPiece(indexPiece, couleur){
        
    const PIECES = ["tour", "cavalier", "fou", "reine", "roi", "fou", "cavalier", "tour", "pion", "pion", "pion", "pion", "pion", "pion", "pion", "pion"];
    
    let piece = PIECES[indexPiece];
    
    if(couleur == "BLANC"){
        if(piece == "reine"){
            piece = "roi";
        }
        else if(piece == "roi"){
            piece = "reine";
        }
    }
    
    return piece + " " + couleur;
}

let classeCase = "case-blanche";

for(let i = 1; i <= 64; i++){
    let html = "";
    html += "<div class='case " + classeCase + "'>";
    if(i <= 16){
        html += afficherPiece(i-1, "NOIR");
    }
    if(i > 48){
        html += afficherPiece(64-i, "BLANC");
    }
    html += "</div>";
    if(i % 8 != 0){
        classeCase = (classeCase == "case-blanche") ? "case-noire" : "case-blanche";
    }
    document.getElementById('plateau').innerHTML += html;
}