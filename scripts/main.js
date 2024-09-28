
const currentYear = new Date().getFullYear();
const lastModifiedDate = document.lastModified;
document.getElementById('currentyear').innerHTML = `© ${currentYear} - `;
document.getElementById('lastModified').textContent = `Last Modified: ${lastModifiedDate}`;


const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

let courseBlockContainer = document.querySelector(".block-courses");
const section1 = document.querySelector(".section-1");
const listCompletedCourse = document.querySelector(".list-courses-completed")
const initialDisplay = document.querySelector(".allCourses");
const cseDisplay = document.querySelector(".cseCourses");
const wddDisplay = document.querySelector(".wddCourses");

function createBlockCourse(filteredCourses){  
    courseBlockContainer.innerHTML = ""
    filteredCourses.forEach(course => {
        let courseCode = document.createElement("div");
        courseCode.className = "course";
        courseCode.innerHTML = `${course.subject} ${course.number}`;
        if (course.completed === true){
            courseCode.style.backgroundColor = "#c54f00";
            courseCode.style.color = "#ffffff";
            courseCode.style.fontWeight = "bold";
            courseCode.style.width = "200px";
            courseCode.style.padding = "5px";
            courseCode.style.margin = "15px";
            courseCode.style.border = "none";
            courseCode.style.borderRadius = "5px";
            
        }else{
            courseCode.style.backgroundColor = "#ffffff";
            courseCode.style.color = "#c54f00"
            courseCode.style.border = "1px solid #c54f00";
            courseCode.style.fontWeight = "bold";
            courseCode.style.width = "200px";
            courseCode.style.padding = "5px";
            courseCode.style.margin = "15px";
            courseCode.style.borderRadius = "5px";
        }
        courseBlockContainer.appendChild(courseCode);
        
    });
}

function createCourseCompletedList() {
    let CompletedCourse = document.querySelector(".list-courses-completed");
    let totalCreditsrequired = document.createElement("p");
    let Creditsrequired = 0;

    for (let i = 0; i < courses.length; i++) {
        if (courses[i].completed === true) {
            let courseElement = document.createElement("li");
            courseElement.innerHTML = `${courses[i].subject} ${courses[i].number}`;
            courseElement.style.listStyle = "circle";
            courseElement.style.textAlign = "left";
            courseElement.style.fontWeight = "bold";
            courseElement.style.marginLeft = "20px";

            Creditsrequired += courses[i].credits;

            CompletedCourse.appendChild(courseElement);
        }
    }
    totalCreditsrequired.innerHTML = `Total credits required: <strong>${Creditsrequired}</strong>`;
    totalCreditsrequired.style.color = "#ffffff"
    totalCreditsrequired.style.backgroundColor = "#009E61"
    totalCreditsrequired.style.borderRadius = "15px"
    totalCreditsrequired.style.width = "80%"
    totalCreditsrequired.style.margin = "10px 0"
    totalCreditsrequired.style.padding = "10px"
    totalCreditsrequired.style.fontWeight = "bold"
    totalCreditsrequired.style.textAlign = "left"

    CompletedCourse.appendChild(totalCreditsrequired);
    section1.appendChild(CompletedCourse);
}


initialDisplay.addEventListener("click", () =>{
    createBlockCourse(courses);
})

cseDisplay.addEventListener("click", () => {
    createBlockCourse(courses.filter(course => course.subject === "CSE"));
})

wddDisplay.addEventListener("click", () => {
    createBlockCourse(courses.filter(course => course.subject === "WDD"));
})

createBlockCourse(courses);
createCourseCompletedList();

// Hamburger Menu
const mainNav = document.querySelector(".nav-menu")
const hambutton = document.querySelector("#menu");

hambutton.addEventListener("click", () => {
    mainNav.classList.toggle("show");
    hambutton.classList.toggle("show");
});