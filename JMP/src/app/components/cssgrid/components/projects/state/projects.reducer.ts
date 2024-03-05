import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import * as CssGridProjectActions from './projects.actions';

export interface ProjectInfo {
    name: string;
    type: string;
    technologies: Array<string>;
    description: Array<string>
}

export interface CssGridProjectsFeatureState {
    projects: ProjectInfo[];
}

export const initialFeatureState: CssGridProjectsFeatureState = {
    projects: [
        {
            name: "Adaptive Reuse History",
            type: "Web App: Development",
            technologies: new Array<string>('C#', 'MVC', '.NET Core', 'SQL Server Management Studio'),
            description: new Array<string>(
                "Incorporated Promises & AJAX for asynchronous behavior when communicating with backend service",
                "Included jQuery to minimize boilerplate and instead leverage libraries methods to work the Document Object Model",
                "Introduced a new service method that business team needed that provided information regarding a specific location",
                "Implemented new JavaScript methods to handle dynamic CRUD behavior for the frontend of application")
        },
        {
            name: "Azure Task Scheduler",
            type: "Web App: Development",
            technologies: new Array<string>('C#', 'MVC', '.NET Core', "Razor Pages", "Repository Pattern"),
            description: new Array<string>(
                "Rewrite for an existing application",
                "Using Razor Pages for the Frontend of application that provides us the ability to then use View Models that give life to the view by providing information that has been retrieved from backend service",
                "Create the build pipeline within Azure DevOps to produce an artifact that will then be used within the release pipeline build that allows deployment of the application to Development and Production environments",
                "Integrated companies Single Sign On library that ensures users are being authenticated and authorized for the use of application"),
        },
        {
            name: "Certified Mail Service",
            type: "Web API: Development",
            technologies: new Array<string>('C#', '.NET Core', 'Mediator Pattern'),
            description: new Array<string>(
                "Introduce new service methods following the Mediator Pattern",
                "Include validation for request objects and tested against this validation by adding new xUnit regression tests for its associated endpoint or service method",
                "Verified requests and responses were passing with expected results by adding integration tests using Moq and Shouldly",
                "Authored a Net Standard 2.0 library that acts as a wrapper for the service application that will then be consumed and made available to company developers in the form of a published Nuget Package"),
        },
        {
            name: "Directory Listing Errors",
            type: "Web App: Development",
            technologies: new Array<string>('C#', '.NET Framework', 'MVC'),
            description: new Array<string>(
                "Added a method that was responsible for dealing with the cleanup of special characters for the data retrieved to achieve proper format and expected results within Excel file",
                "File created was consistent with information that existed within application",
                "Functionality implemented to export .xlsx files from application for business users")
        },
        {
            name: "Sustainable Grant",
            type: "Web App: Development",
            technologies: new Array<string>('C#', 'MVC', '.NET Framework', 'SQL Server Management Studio'),
            description: new Array<string>(
                "Enhanced view based on feature request with additional dropdown that provided the ability for the business unit to gather additional information",
                "Modified existing controllers with required methods to handle the logic for uploading files and communicating with service to save information",
                "Implemented functionality that allows users to upload files related to file being created",
                "Updated database table with additional columns to store information for uploaded files")
        },
        {
            name: "PSS API Daily Budget Alert",
            type: "Automation",
            technologies: new Array<string>('C#', 'Dapper', 'MSTest', '.NET Core'),
            description: new Array<string>(
                "Automatically sends out an email using the Fluent Email library to alert team if any budget information is missing",
                "Project scheduled to run every Wednesday based on pipeline to check the current and following month for any entities that are missing budget information",
                "Retrieves information from database using the Dapper library and is using MSTest for testing")
        },
        {
            name: "Roadside Mobile Advantage",
            type: "Automation",
            technologies: new Array<string>('C#', 'Dapper', '.NET Core', 'xUnit'),
            description: new Array<string>(
                "Automated the manual process for creating files within development and production environments",
                "Integrated an external service that provides functionality for creating file",
                "Project was created for the purpose of saving time when testing environments",
                "Setup pipeline with YAML to run pipeline when developer commits changes to repository")
        },
        {
            name: "UHIR Claims",
            type: "Automation",
            technologies: new Array<string>('C#', 'Dapper', 'MSTest', '.NET Framework'),
            description: new Array<string>(
                "Automated the manual process for creating claims within development and production environments",
                "Integrated an internal service that provided functionality for creating and retrieving claims",
                " Testing information existing within claim after creation against the data used to create it to verify application is saving information correctly")
        }
    ]
}

export const cssGridProjectsFeatureSelector = createFeatureSelector<CssGridProjectsFeatureState>("cssGridProjectsFeatureSelector");
export const getCssGridProjectFeatureState = createSelector(cssGridProjectsFeatureSelector, (state: CssGridProjectsFeatureState) => state);

export const cssGridProjectsReducer = createReducer(
    initialFeatureState,
    on(CssGridProjectActions.getCssGridProjectsState, (state, action) => {
        return {
            ...state
        }
    })
)