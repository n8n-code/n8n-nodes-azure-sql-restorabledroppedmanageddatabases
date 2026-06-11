import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureSqlRestorabledroppedmanageddatabases implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Azure SQL Restorabledroppedmanageddatabases',
		name: 'N8nDevAzureSqlRestorabledroppedmanageddatabases',
		icon: { light: 'file:./azure-sql-restorabledroppedmanageddatabases.png', dark: 'file:./azure-sql-restorabledroppedmanageddatabases.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Azure SQL Database RESTful API manages databases via CRUD operations.',
		defaults: { name: 'Azure SQL Restorabledroppedmanageddatabases' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevAzureSqlRestorabledroppedmanageddatabasesApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
		],
	};
}
