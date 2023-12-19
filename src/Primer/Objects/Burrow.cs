﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Primer
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Burrow.
    /// </summary>
    // *** Start programmer edit section *** (Burrow CustomAttributes)

    // *** End programmer edit section *** (Burrow CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("BurrowE", new string[] {
            "Name as \'Name\'",
            "Forest as \'Forest\'",
            "Forest.Name as \'Name\'",
            "Forest.Country.Name as \'Country\'"}, Hidden=new string[] {
            "Forest.Name"})]
    [MasterViewDefineAttribute("BurrowE", "Forest", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "")]
    public class Burrow : ICSSoft.STORMNET.DataObject
    {
        
        private string fName;
        
        private IIS.Primer.Forest fForest;
        
        private IIS.Primer.Animal fAnimal;
        
        // *** Start programmer edit section *** (Burrow CustomMembers)

        // *** End programmer edit section *** (Burrow CustomMembers)

        
        /// <summary>
        /// Name.
        /// </summary>
        // *** Start programmer edit section *** (Burrow.Name CustomAttributes)

        // *** End programmer edit section *** (Burrow.Name CustomAttributes)
        [StrLen(255)]
        public virtual string Name
        {
            get
            {
                // *** Start programmer edit section *** (Burrow.Name Get start)

                // *** End programmer edit section *** (Burrow.Name Get start)
                string result = this.fName;
                // *** Start programmer edit section *** (Burrow.Name Get end)

                // *** End programmer edit section *** (Burrow.Name Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Burrow.Name Set start)

                // *** End programmer edit section *** (Burrow.Name Set start)
                this.fName = value;
                // *** Start programmer edit section *** (Burrow.Name Set end)

                // *** End programmer edit section *** (Burrow.Name Set end)
            }
        }
        
        /// <summary>
        /// Burrow.
        /// </summary>
        // *** Start programmer edit section *** (Burrow.Forest CustomAttributes)

        // *** End programmer edit section *** (Burrow.Forest CustomAttributes)
        [PropertyStorage(new string[] {
                "Forest"})]
        [NotNull()]
        public virtual IIS.Primer.Forest Forest
        {
            get
            {
                // *** Start programmer edit section *** (Burrow.Forest Get start)

                // *** End programmer edit section *** (Burrow.Forest Get start)
                IIS.Primer.Forest result = this.fForest;
                // *** Start programmer edit section *** (Burrow.Forest Get end)

                // *** End programmer edit section *** (Burrow.Forest Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Burrow.Forest Set start)

                // *** End programmer edit section *** (Burrow.Forest Set start)
                this.fForest = value;
                // *** Start programmer edit section *** (Burrow.Forest Set end)

                // *** End programmer edit section *** (Burrow.Forest Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Primer.Animal.
        /// </summary>
        // *** Start programmer edit section *** (Burrow.Animal CustomAttributes)

        // *** End programmer edit section *** (Burrow.Animal CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "Animal"})]
        public virtual IIS.Primer.Animal Animal
        {
            get
            {
                // *** Start programmer edit section *** (Burrow.Animal Get start)

                // *** End programmer edit section *** (Burrow.Animal Get start)
                IIS.Primer.Animal result = this.fAnimal;
                // *** Start programmer edit section *** (Burrow.Animal Get end)

                // *** End programmer edit section *** (Burrow.Animal Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Burrow.Animal Set start)

                // *** End programmer edit section *** (Burrow.Animal Set start)
                this.fAnimal = value;
                // *** Start programmer edit section *** (Burrow.Animal Set end)

                // *** End programmer edit section *** (Burrow.Animal Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "BurrowE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View BurrowE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("BurrowE", typeof(IIS.Primer.Burrow));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of Burrow.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfBurrow CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfBurrow CustomAttributes)
    public class DetailArrayOfBurrow : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Primer.DetailArrayOfBurrow members)

        // *** End programmer edit section *** (IIS.Primer.DetailArrayOfBurrow members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type Burrow by index.
        /// </summary>
        /// <summary>
        /// Adds object with type Burrow.
        /// </summary>
        public DetailArrayOfBurrow(IIS.Primer.Animal fAnimal) : 
                base(typeof(Burrow), ((ICSSoft.STORMNET.DataObject)(fAnimal)))
        {
        }
        
        public IIS.Primer.Burrow this[int index]
        {
            get
            {
                return ((IIS.Primer.Burrow)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Primer.Burrow dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
