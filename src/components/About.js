import React from 'react'
import { marked } from "marked";
import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/night-owl.css';
import csharp from 'highlight.js/lib/languages/csharp'

hljs.registerLanguage('csharp', csharp);

const About = () => {

  const content = `
  \`\`\`csharp
  public class Nguyen_Thien_Nha
  {
      public string FullName;
      public TimeSpan DayOfBirth;
      public string Email;

      public Nguyen_Thien_Nha()
      {
          FullName = "Nguyễn Thiện Nhã";
          DayOfBirth = new TimeSpan(631354176000000000);
          Email = "nhanguyen7901@gmail.com";
      }
      
      public Dictionary<string, string> GetWorkExperience() => new()
      {
          { "May, 2022 - July, 2022", "ERP Consultant (Internship) at ARON" },
      };
      
      public Dictionary<string, string> GetEducation() => new()
      {
          { "2019 - 2023", "Business Information Systems 
                            at University of Economics Ho Chi Minh City (UEH)" },
      
      };

      public string[] GetSkills() => new[]
      {
          "C#",
          "ASP.NET Core MVC",
          "ASP.NET Core Web API",
          "Entity Framework Core",
          "MSSQL",
          "HTML/CSS/Javascript",
          "Bootstrap/Tailwind",
          "React",
          "Docker",
      };
  }
  \`\`\`
  `;
    marked.setOptions({
            langPrefix: "hljs language-",
            highlight: function(code) {
            return hljs.highlight(code, {language: 'csharp'}).value;
            }
    });

    return (
        <div name='about' className='w-full bg-[#011627] py-12'>
            <div className='flex justify-center pb-6'>
                <h2 className='text-4xl sm:text-5xl font-bold text-white border-b-4 pb-1'>
                    <span className='text-[#345EDF]'>{"<"}</span>
                    About
                    <span className='text-[#345EDF]'>{" />"}</span>
                </h2>
            </div>
            
            <div className='md:ml-[25%] text-lg' dangerouslySetInnerHTML={{ __html: marked(content) }} />
        </div>
    )
}

export default About