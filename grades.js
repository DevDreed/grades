var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
	let aCounter;
	let bCounter;
	let cCounter;
	let dCounter;
	let fCounter;
	
function maxScore(){
	let currentScore;
	for(var x = 0; x < scores.length; x++){
		if(x === 0){
			currentScore = scores[x];
		}else{
			if(currentScore < scores[x]){
				currentScore = scores[x];
			}
		}
	}
	return currentScore;
}

function minScore(){
	let currentScore;
	for(let x = 0; x < scores.length; x++){
		if(x === 0){
			currentScore = scores[x];
		}else{
			if(currentScore > scores[x]){
				currentScore = scores[x];
			}
		}
	}
	return currentScore;
}

function getLetterGrade(numValue){
	let letterGrade;
	if(numValue >= 90){
		letterGrade = "A";
		aCounter++;
	}else if(numValue < 90 && numValue >= 81){
		letterGrade = "B";
		bCounter++;
	}else if(numValue < 81 && numValue >= 71){
		letterGrade = "C";
		cCounter++;
	}else if(numValue < 71 && numValue >= 61){
		letterGrade = "D";
		dCounter++;
	}else if(numValue < 61){
		letterGrade = "F";
		fCounter++;
	}
	return letterGrade;
}

function getGradeCounts() {
	for(let x = 0; x < scores.length; x++){
		let grade = getLetterGrade(scores[x]);
		console.log(grade);
	}
}

function printGradeLetters(){
	aCounter = 0;
	bCounter = 0;
	cCounter = 0;
	dCounter = 0;
	fCounter = 0;
	for(let x = 0; x < scores.length; x++){
		let grade = getLetterGrade(scores[x]);
		console.log(grade);
	}
}



function countLetterGrades(){
	aCounter = 0;
	bCounter = 0;
	cCounter = 0;
	dCounter = 0;
	fCounter = 0;
	for(let x = 0; x < scores.length; x++){
		getLetterGrade(scores[x]);
	}

	let grades = {};
	grades.A = aCounter;
	grades.B = bCounter;
	grades.C = cCounter;
	grades.D = dCounter;
	grades.F = fCounter;
	return grades;
}

printGradeLetters();
console.log("Min Score", minScore());
console.log("Max Score", maxScore());
console.log("Grade Counts", countLetterGrades());
