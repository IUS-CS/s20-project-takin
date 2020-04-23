#**Software Architecture Document**


For:  _Takin Project_ 

_Version 1.0_

Prepared By:

_Haseeb Chaudhry_

Markdown Edits: 

_Kham Mangar_

Professor:

_Chris Sexton_

Organization:

_Indiana University Southeast_

March 3, 2020

---
---

# Revision History

Date | Version | Description | Author 
---- | ------- | ----------- | ------
4/20/20| 1.0 | arictecture.docx to md file | Kham mangar
|  | | 
|  | | 
|  | | 
|  | | 
|  | | 
|  | | 
|  | | 
|  | | 
|  | | 




---
---

Table of Contents
=================

<!--ts-->
   * [Table of Contents](#Table-of-Contents)
   * [Introduction](#Introduction)       
        * [Purpose](#Purpose)  
        * [Architecture Overview](#Architecture-Overview) 
        * [Architectural Representation](#Architectural-Representation)
    * [Architectural Goals and Constraints](#Architectural-Goals-and-Constraints)
    * [Use-Case View](#Use-case-view) 
        * [Architecturally-Significant Use Cases](#Architecturally-Significant-Use-Cases)
    *  [Logical View](#Logical-View)
    * [Size and Performance](#Size-and-Performance)
        

<!--te-->

#
---
---
Introduction
============
#
Purpose
-------

This document provides a complex overview of the Takin Project and the purpose of the project. It will list the software and technology that Takin Project members will use for extensive involvement and collaboration. In facilitating interoperability through standards, Takin Project will help its members to order food through an online system which will provide ease and time saving for the consumers of this application. It will quickly reduce the wait times that the customers would have to wait through otherwise if they were to order in the general fashion.

The paper provides a sophisticated and elevated description of the objectives of the structural design, the use cases help by the structure and architectural designs and elements that have been chosen to best attain the use cases. The .NET framework permits for the improvement of the design standards and records that define the methodological and field standards in detail. It is these comprehensive plan documents that will steer the advancement of the actual Takin Project content in terms of communications and services

#
Architecture Overview
---------------------

Takin Project is developing an online ordering system for the Indiana University Southeast cafeteria with their menu so that students can go online to order their food without having to wait in line and also pay online as well before going to go pick up their food. It would save the students a tremendous amount of time seeing as they would need it and would use the time they save to study for an upcoming exam or finish their homework before class.

The Takin Project is also characterized using a UML model at a sophisticated concept that allows us to envision, comprehend and think about the architecturally substantial aspects and distinguish areas of risk that require more thorough amplification. This document is a way of conveying the UML model in perspective, to present the information in a coordinated manner and to examine sections of the model.
#
<p align = "center">
<img src="Takin SAD Files/Picture1.png" alt = "picture1.png" width = "720">
</p>
#
#
---
---
#
#
Architectural Representation
---------------------------
The UML design of the structure has been separated into the following four views:

- **End-User Authentication** :This describes the user registration process where the user would register for the website and confirm their identity to prove they are who they claim to be.
- **End-User Authorization** :This describes the user registration process after they have registered and what they are allowed to do in the system, such as order food from the menu but not being able to look into the database for the system.
- **Classification Admin** : This describes the administrator who is in charge or classifying all the users and grouping them together.
- **User-Intelligence Admin** :This describes the administrator who is in charge of keeping track of the information of all the users.

Although we have decided that the understanding of this structural design will be based on web services but of course there is always the likelihood that in the future such technical structures may change. Wewillalsoseethatbyseparatingtheseconcernsinthiswaywe canhandletechnicaldetailssuchas cyber security and privacy concerns of the users in a professional manner.

---
---
#
Architectural Goals and Constraints
===================================

 There are some crucial prerequisites and system limitations that have an important impact on the architecture. They are:

##

1. The Database must be able to handle the number of users that will visit the website without overloading and shutting down while losing all of its data in the process.
2. There should be a Disaster Recovery Plan in case of a data loss event.
3. The Data must be stored off site somewhere so that it can be replicated in case of a data loss event because of the database being down.
4. The User Interface design must be simple enough so that the users don&#39;t need much help navigating the website and they can figure it out on their own.
5. The ordering system process should go as smoothly as possible so that the customers don&#39;t get frustrated and cancel their order for having to wait to long as if they&#39;re waiting in a line at a store and they leave after waiting too long.

#

Use-Case View
-------------

Use-Case UML Diagram

<p align = "center">
<img src="Takin SAD Files/Picture2.png" alt = "picture1.png" width = "720">
</p>

#
#
---
---
Architecturally-Significant Use Cases
-------------------------------------

User Registration

User will go on the website to register for the food ordering system.

Login

User will then use that information that they entered in the registration to continue with the login process.

Menu Catalog

This use case is for the admin to make sure the menu is in order and everything that is on the menu that can be ordered is also available.

Pay Information

It is the administrators responsibility to keep the sensitive financial information encrypted and absolutely cannot allow another user to be able to use any sort of SQL attacks such as SQL injection to gain access to any of the financial information such as the credit/debit card numbers.

Logical View
============

<p align = "center">
<img src="Takin SAD Files/Picture3.png" alt = "picture1.png" width = "720">
</p>


#
#

Size and Performance
====================
### It is difficult to say at this time how many specific users this system will be able to support without crashing as far as the size requirements go. As for the performance, that is also something that we will be able to determine after running some tests.

###