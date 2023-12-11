import './Ability.css'

const Ability = () => {
    return (
        <div className='ability-container'>
          <div className="i-can-do-container">
           <div className="i-can-do">I CAN DO -- Events Management no matter online or offline</div>
           <div className="i-can-do">I CAN DO -- Marketing analysis, advertisement design</div>
           <div className="i-can-do">I CAN DO -- Skilled use Powerpoint, Excel</div>
         </div>
         <div className='honors-internship-container'>
         <div className='honors'>
         <h2>Second Class Honours On The Course of International Events Management</h2>
          <img src='honor.jpg' alt='honor' />
         </div>
         <div className='internship'>
         <h2>6 Months of Intership at Publicus Groupe (Multinational Acvertising Agency)</h2>
          <img src='intern.jpg' />
         </div>
         </div>
         <div className='conclusion'>
         <p>During my undergraduate study, I have a clear understanding of the course of Event Management, and have a certain understanding of Management, Advertising and Events. I have theoretical and practical experience both online and offline. Last year, I participated in Publicis Gourp's internship, which lasted for half a year. I was mainly responsible for advertising design, uploading and market research on social media. I was proficient in the application of PowerPoint and Excel in my work.</p>
         </div>
            
        </div>
    );
};

export default Ability;