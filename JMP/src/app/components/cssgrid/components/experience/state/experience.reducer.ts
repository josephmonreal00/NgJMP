import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import * as ExperienceActions from './experience.actions';

export interface Skill {
    skillName: string;
    yearsToDate: number;
    yearStarted: number;
    totalYears: number;
}

export interface Experience {
    company: string;
    description: Array<string>;
    skills: Array<Skill>;
    started: Date;
    ended: Date;
    title: string;
}

export interface CssGridExperienceFeatureState {
    experiences: Array<Experience>;
}

export const initialFeatureState: CssGridExperienceFeatureState = {
    experiences: new Array<Experience>(
        {
            company: "U-Haul",
            description: new Array<string>(
                "Cognizant of component lifecycle methods for better organization of asynchronous code to guarantee data is being retrieved properly from backend service",
                "Introduce additional controllers and repositories for .NET Core API backend service to handle the responsibility of CRUD operations and organized these changes by following the Repository Pattern",
                "Utilize the RxJS library for its rich toolset that streamlines development work with asynchronous behaviorespecially when used in conjunction with Angular Reactive Forms, Routing, NgRx Effects, and the HTTP Client API",
                "Structure applications with the mindset of stratifying unique behavior and keeping overall structure as modular as possible so that we can follow the Separation of Concerns Principle",
                "Practice consistency with composition of features so that each have their own designated module, routing module, services, and whatever else a particular feature may need for it to function properly within both the local and global scope"
            ),
            skills: new Array<Skill>(
                {
                    skillName: "Automation",
                    yearsToDate: 3,
                    yearStarted: 2021,
                    totalYears: 4
                },
                {
                    skillName: "Azure DevOps",
                    yearsToDate: 3,
                    yearStarted: 2021,
                    totalYears: 4
                },
                {
                    skillName: "Software Development",
                    yearsToDate: 3,
                    yearStarted: 2021,
                    totalYears: 4
                },
                {
                    skillName: "C#",
                    yearsToDate: 3,
                    yearStarted: 2021,
                    totalYears: 4
                },
                {
                    skillName: ".NET Core",
                    yearsToDate: 3,
                    yearStarted: 2021,
                    totalYears: 4
                },
                {
                    skillName: ".NET Framework",
                    yearsToDate: 3,
                    yearStarted: 2021,
                    totalYears: 4
                },
                {
                    skillName: "TypeScript",
                    yearsToDate: 3,
                    yearStarted: 2021,
                    totalYears: 4
                },
                {
                    skillName: "GIT",
                    yearsToDate: 3,
                    yearStarted: 2021,
                    totalYears: 4
                },
                {
                    skillName: "JavaScript",
                    yearsToDate: 6,
                    yearStarted: 2018,
                    totalYears: 7
                },
                {
                    skillName: "xUnit",
                    yearsToDate: 3,
                    yearStarted: 2021,
                    totalYears: 4
                },
                {
                    skillName: "MSTest",
                    yearsToDate: 3,
                    yearStarted: 2021,
                    totalYears: 4
                },
            ),
            started: new Date(2021, 6, 21),
            ended: new Date(),
            title: "SDET"
        },
        {
            company: "TechEquity",
            description: new Array<string>(
                " Developed automation projects to replace manual testing for development environments that resulted into increased efficiency in time and bug detection",
                "Leveraged testing frameworks such as MSTest and xUnit for regression testing but also implemented Moq for integration testing to mock objects or in my case repositories, providing the ability to test results produced for requests and responses with the help of Shouldly",
                "Setup scheduled YAML pipelines to build automation projects using the build and test tasks provided by DotNetCoreCLI@2 which then automatically sends notifications to the development Microsoft Teams channel on whether tests are passing or failing",
                "Contributing to a .NET Core 6+ project that is a rewrite for an existing legacy application that’s allowed me to gain more experience with both the MVC and Repository Patterns",
                "Currently working on an API that follows the Mediator Pattern and responsible for introducing new service methods, integration tests, regression tests, and creating the pipeline build that produces the artifact that will then be used within the release build to get the project deployed successfully",
                "Evaluate Kibana exception logs and determine whether an application needs attention and by doing so using Azure DevOps to create a bug and assign to developer responsible for application",
                "Responsible for the Release Management Process which entails the creation of release packages, Kibana log analysis, and verification after deployment that bugs were not introduced to production environment"
            ),
            skills: new Array<Skill>(
                {
                    skillName: "Azure DevOps",
                    yearsToDate: 3,
                    yearStarted: 2021,
                    totalYears: 4
                },
                {
                    skillName: "Software Development",
                    yearsToDate: 3,
                    yearStarted: 2021,
                    totalYears: 4
                },
                {
                    skillName: "C#",
                    yearsToDate: 3,
                    yearStarted: 2021,
                    totalYears: 4
                },
                {
                    skillName: ".NET Core",
                    yearsToDate: 3,
                    yearStarted: 2021,
                    totalYears: 4
                },
                {
                    skillName: "TypeScript",
                    yearsToDate: 3,
                    yearStarted: 2021,
                    totalYears: 4
                },
                {
                    skillName: "GIT",
                    yearsToDate: 3,
                    yearStarted: 2021,
                    totalYears: 4
                },
            ),
            started: new Date(2023, 2, 1),
            ended: new Date(2024, 2, 1),
            title: "Software Developer"
        },
        {
            company: "Cord Digital",
            description: new Array<string>(
                "Deployed two different successful websites with positive feedback from clients",
                "Defined interfaces and classes that provided the application with functionality depending on behavior desired",
                "Responsible for communicating directly with designers to gather requirements for building features"
            ),
            skills: new Array<Skill>(
                {
                    skillName: "Shopify",
                    yearsToDate: 1,
                    yearStarted: 2020,
                    totalYears: 1
                },
                {
                    skillName: "Liquid Templating Language",
                    yearsToDate: 1,
                    yearStarted: 2020,
                    totalYears: 1
                },
                {
                    skillName: "JavaScript",
                    yearsToDate: 6,
                    yearStarted: 2018,
                    totalYears: 7
                },
            ),
            started: new Date(2020, 1, 1),
            ended: new Date(2020, 12, 1),
            title: "Web Developer"
        }
    )
}

export const cssGridExperienceFeatureSelector = createFeatureSelector<CssGridExperienceFeatureState>("cssGridExperienceFeatureSelector");
export const getCssGridExperienceFeatureState = createSelector(cssGridExperienceFeatureSelector, (state) => state);

export const cssGridExperienceReducer = createReducer(
    initialFeatureState,
    on(ExperienceActions.getExperienceFeatureState, (state, action) => {
        return {
            ...state
        }
    })
);