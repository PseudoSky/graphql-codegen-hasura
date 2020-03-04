import { generateOptimisticResponseForMutation, generateUpdateFunctionForMutation, convertToGraph, ObjectWithId, FieldMap, getLogLevel, ensureTypenameOnFragment, ensureTypenameOnFragments, stripInsertInputClientFields } from 'graphql-codegen-hasura-core'
import { ApolloClient, ApolloQueryResult, defaultDataIdFromObject, FetchResult, MutationOptions, ObservableQuery, QueryOptions, SubscriptionOptions, Observable, DataProxy } from '@apollo/client'
import { VehicleFragment } from '../';
import { Vehicle } from '../';
import { VehicleFragmentDoc } from '../';
import { QueryVehicleObjectsQueryVariables } from '../';
import { QueryVehicleByIdQuery } from '../';
import { QueryVehicleByIdDocument } from '../';
import { QueryVehicleByIdQueryVariables } from '../';
import { QueryVehicleObjectsQuery } from '../';
import { QueryVehicleObjectsDocument } from '../';
import { SubscribeToVehicleByIdSubscription } from '../';
import { SubscribeToVehicleByIdDocument } from '../';
import { SubscribeToVehicleByIdSubscriptionVariables } from '../';
import { SubscribeToVehicleObjectsSubscription } from '../';
import { SubscribeToVehicleObjectsDocument } from '../';
import { SubscribeToVehicleObjectsSubscriptionVariables } from '../';
import { Vehicle_Insert_Input } from '../';
import { Vehicle_On_Conflict } from '../';
import { InsertVehicleMutation } from '../';
import { InsertVehicleMutationVariables } from '../';
import { InsertVehicleWithOnConflictMutationVariables } from '../';
import { InsertVehicleDocument } from '../';
import { InsertVehicleWithOnConflictDocument } from '../';
import { Vehicle_Set_Input } from '../';
import { UpdateVehicleByIdMutation } from '../';
import { UpdateVehicleByIdMutationVariables } from '../';
import { UpdateVehicleByIdDocument } from '../';
import { UpdateVehicleMutation } from '../';
import { UpdateVehicleMutationVariables } from '../';
import { UpdateVehicleDocument } from '../';
import { RemoveVehicleModelMutation } from '../';
import { RemoveVehicleModelMutationVariables } from '../';
import { RemoveVehicleModelDocument } from '../';
import { RemoveVehicleModelByIdMutation } from '../';
import { RemoveVehicleModelByIdMutationVariables } from '../';
import { RemoveVehicleModelByIdDocument } from '../';
import { VehicleLocationOnlyFragment } from '../';
import { VehicleLocationOnlyFragmentDoc } from '../';
import { QueryVehicleLocationOnlyObjectsQueryVariables } from '../';
import { QueryVehicleLocationOnlyByIdQuery } from '../';
import { QueryVehicleLocationOnlyByIdDocument } from '../';
import { QueryVehicleLocationOnlyByIdQueryVariables } from '../';
import { QueryVehicleLocationOnlyObjectsQuery } from '../';
import { QueryVehicleLocationOnlyObjectsDocument } from '../';
import { SubscribeToVehicleLocationOnlyByIdSubscription } from '../';
import { SubscribeToVehicleLocationOnlyByIdDocument } from '../';
import { SubscribeToVehicleLocationOnlyByIdSubscriptionVariables } from '../';
import { SubscribeToVehicleLocationOnlyObjectsSubscription } from '../';
import { SubscribeToVehicleLocationOnlyObjectsDocument } from '../';
import { SubscribeToVehicleLocationOnlyObjectsSubscriptionVariables } from '../';
import { InsertVehicleLocationOnlyMutation } from '../';
import { InsertVehicleLocationOnlyMutationVariables } from '../';
import { InsertVehicleLocationOnlyWithOnConflictMutationVariables } from '../';
import { InsertVehicleLocationOnlyDocument } from '../';
import { InsertVehicleLocationOnlyWithOnConflictDocument } from '../';
import { UpdateVehicleLocationOnlyByIdMutation } from '../';
import { UpdateVehicleLocationOnlyByIdMutationVariables } from '../';
import { UpdateVehicleLocationOnlyByIdDocument } from '../';
import { UpdateVehicleLocationOnlyMutation } from '../';
import { UpdateVehicleLocationOnlyMutationVariables } from '../';
import { UpdateVehicleLocationOnlyDocument } from '../';
import { DogFragment } from '../';
import { Dogs } from '../';
import { DogFragmentDoc } from '../';
import { QueryDogObjectsQueryVariables } from '../';
import { QueryDogByIdQuery } from '../';
import { QueryDogByIdDocument } from '../';
import { QueryDogByIdQueryVariables } from '../';
import { QueryDogObjectsQuery } from '../';
import { QueryDogObjectsDocument } from '../';
import { SubscribeToDogByIdSubscription } from '../';
import { SubscribeToDogByIdDocument } from '../';
import { SubscribeToDogByIdSubscriptionVariables } from '../';
import { SubscribeToDogObjectsSubscription } from '../';
import { SubscribeToDogObjectsDocument } from '../';
import { SubscribeToDogObjectsSubscriptionVariables } from '../';
import { Dogs_Insert_Input } from '../';
import { Dogs_On_Conflict } from '../';
import { InsertDogMutation } from '../';
import { InsertDogMutationVariables } from '../';
import { InsertDogWithOnConflictMutationVariables } from '../';
import { InsertDogDocument } from '../';
import { InsertDogWithOnConflictDocument } from '../';
import { Dogs_Set_Input } from '../';
import { UpdateDogByIdMutation } from '../';
import { UpdateDogByIdMutationVariables } from '../';
import { UpdateDogByIdDocument } from '../';
import { UpdateDogMutation } from '../';
import { UpdateDogMutationVariables } from '../';
import { UpdateDogDocument } from '../';
import { RemoveDogsModelMutation } from '../';
import { RemoveDogsModelMutationVariables } from '../';
import { RemoveDogsModelDocument } from '../';
import { RemoveDogsModelByIdMutation } from '../';
import { RemoveDogsModelByIdMutationVariables } from '../';
import { RemoveDogsModelByIdDocument } from '../';

    // GLOBAL TYPES
    //------------------------------------------------
    export type RemoveEntitiesQueryHelperResultEx = { affected_rows:number };

    //
    // GLOBAL VALUES
    const logLevel = getLogLevel();

  

    // vehicle HELPERS
    //------------------------------------------------

    export type VehicleByIdHelperResultEx = { vehicle:VehicleFragment | null | undefined };
    export type VehicleObjectsHelperResultEx = { objects:VehicleFragment[] };
    
  

    // Direct Client & Cache Fragment Helpers
    //
    function clientReadFragmentVehicleById({ apolloClient, vehicleId}: { apolloClient: ApolloClient<object>, vehicleId: string }): VehicleFragment | null | undefined {
      return apolloClient.readFragment<VehicleFragment | null | undefined>({ fragment: VehicleFragmentDoc, fragmentName:'Vehicle', id: defaultDataIdFromObject({ __typename: 'vehicle', id:vehicleId }) });
    }

    function clientWriteFragmentVehicleById({ apolloClient, vehicleId, vehiclePartial, fieldMap }: { apolloClient: ApolloClient<object>, vehicleId: string, vehiclePartial: Partial<VehicleFragment> | Vehicle_Insert_Input | null, fieldMap?: FieldMap<string> }): Partial<VehicleFragment> {
      const parsedFragment = convertToGraph({ input:vehiclePartial, typename:'vehicle', fieldMap });
      if(logLevel >= 2) console.log(' --> cacheWriteFragmentVehicleById - vehiclePartial:', vehiclePartial);
      apolloClient.writeFragment<Partial<VehicleFragment> | null>({ fragment: VehicleFragmentDoc, fragmentName:'Vehicle', id: defaultDataIdFromObject({ ...parsedFragment, id:vehicleId }), data: parsedFragment });
      return parsedFragment;
    }

    function cacheWriteFragmentVehicleById({ apolloClient, vehicleId, vehiclePartial, fieldMap }: { apolloClient: ApolloClient<object>, vehicleId: string, vehiclePartial: Partial<VehicleFragment> | Vehicle_Insert_Input | null, fieldMap?: FieldMap<string> }): Partial<VehicleFragment> {
      const parsedFragment = convertToGraph({ input:vehiclePartial, typename:'vehicle', fieldMap });
      if(logLevel >= 2) console.log(' --> cacheWriteFragmentVehicleById - vehiclePartial:', vehiclePartial);
      apolloClient.cache.writeFragment<Partial<VehicleFragment> | null>({ fragment: VehicleFragmentDoc, fragmentName:'Vehicle', id: defaultDataIdFromObject({ ...parsedFragment, id:vehicleId }), data: parsedFragment });
      return parsedFragment;
    }

    function clientReadQueryVehicleById({ apolloClient, vehicleId}: { apolloClient: ApolloClient<object>, vehicleId: string }): VehicleFragment | null | undefined {
      return apolloClient.readQuery<VehicleFragment | null >({ query: QueryVehicleByIdDocument, variables: { vehicleId }  });
    }

    function clientWriteQueryVehicleById({ apolloClient, vehicleId, vehicle, fieldMap }: { apolloClient: ApolloClient<object>, vehicleId: string, vehicle: VehicleFragment | Vehicle_Insert_Input | null, fieldMap?: FieldMap<string> }): void {
      const vehiclePartial = convertToGraph({ input:vehicle, typename:'vehicle', fieldMap });
      return apolloClient.writeQuery<VehicleFragment | null>({ query: QueryVehicleByIdDocument, variables: { vehicleId }, data: (vehicle ? vehiclePartial : null) });
    }

    function cacheWriteQueryVehicleById({ apolloClient, vehicleId, vehicle, fieldMap }: { apolloClient: ApolloClient<object>, vehicleId: string, vehicle: VehicleFragment | Vehicle_Insert_Input | null, fieldMap?: FieldMap<string> }): void {
      const vehiclePartial = convertToGraph({ input:vehicle, typename:'vehicle', fieldMap });
      return apolloClient.cache.writeQuery<VehicleFragment | null>({ query: QueryVehicleByIdDocument, variables: { vehicleId }, data: (vehicle ? vehiclePartial : null) });
    }
    
    function clientReadQueryVehicleObjects({ apolloClient, variables }: { apolloClient: ApolloClient<object>, variables: QueryVehicleObjectsQueryVariables }): Vehicle[] | null | undefined {
      return apolloClient.readQuery<{Vehicle:Vehicle[] | null}>({ query: QueryVehicleObjectsDocument, variables })?.Vehicle || [];
    }

    function clientWriteQueryVehicleObjects({ apolloClient, variables, data, fieldMap }: { apolloClient: ApolloClient<object>, variables: QueryVehicleObjectsQueryVariables, data:(Vehicle | Vehicle_Insert_Input)[], fieldMap?: FieldMap<string> }): void {
      const objects = convertToGraph({ input:data, typename:'vehicle', fieldMap });
      return apolloClient.writeQuery<{Vehicle:Vehicle[]}>({ query: QueryVehicleObjectsDocument, variables, data: { Vehicle:objects } });
    }

    function cacheWriteQueryVehicleObjects({ apolloClient, variables, data, fieldMap }: { apolloClient: ApolloClient<object>, variables: QueryVehicleObjectsQueryVariables, data:(Vehicle | Vehicle_Insert_Input)[], fieldMap?: FieldMap<string> }): void {
      const objects = convertToGraph({ input:data, typename:'vehicle', fieldMap });
      return apolloClient.cache.writeQuery<{Vehicle:Vehicle[]}>({ query: QueryVehicleObjectsDocument, variables, data: { Vehicle:objects } });
    }

    function clientWriteQueryVehicleInsert({ apolloClient, variables, vehicle, fieldMap }: { apolloClient: ApolloClient<object>, variables: QueryVehicleObjectsQueryVariables, vehicle:Vehicle_Insert_Input, fieldMap?: FieldMap<string> }): void {
      const currentObjects = clientReadQueryVehicleObjects({ apolloClient, variables }) || [];
      const objectsWithInserted = [ ...currentObjects, convertToGraph({ input: vehicle, typename:'vehicle', fieldMap })];
      if(logLevel >= 2) console.log(' --> clientWriteQueryVehicleInsert - objectsWithInserted:', objectsWithInserted);
      return clientWriteQueryVehicleObjects({ apolloClient, variables, data: objectsWithInserted });
    }

    function cacheWriteQueryVehicleInsert({ apolloClient, variables, vehicle, fieldMap }: { apolloClient: ApolloClient<object>, variables: QueryVehicleObjectsQueryVariables, vehicle:Vehicle_Insert_Input, fieldMap?: FieldMap<string> }): void {
      const currentObjects = clientReadQueryVehicleObjects({ apolloClient, variables }) || [];
      const objectsWithInserted = [ ...currentObjects, convertToGraph({ input: vehicle, typename:'vehicle', fieldMap })];
      if(logLevel >= 2) console.log(' --> cacheWriteQueryVehicleInsert - objectsWithInserted:', objectsWithInserted);
      return cacheWriteQueryVehicleObjects({ apolloClient, variables, data: objectsWithInserted });
    }

    function clientWriteQueryVehicleRemove({ apolloClient, variables, vehicleId }: { apolloClient: ApolloClient<object>, variables: QueryVehicleObjectsQueryVariables, vehicleId: string }): void {
      const currentObjects = clientReadQueryVehicleObjects({ apolloClient, variables }) || [];
      const objectsWithRemoved = currentObjects.filter(objectItem => objectItem.id !== vehicleId) || [];
      if(logLevel >= 2) console.log(' --> clientWriteQueryVehicleRemove - objectsWithRemoved:', objectsWithRemoved);
      return clientWriteQueryVehicleObjects({ apolloClient, variables, data: objectsWithRemoved });
    }

    function cacheWriteQueryVehicleRemove({ apolloClient, variables, vehicleId }: { apolloClient: ApolloClient<object>, variables: QueryVehicleObjectsQueryVariables, vehicleId: string }): void {
      const currentObjects = clientReadQueryVehicleObjects({ apolloClient, variables }) || [];
      const objectsWithRemoved = currentObjects.filter(objectItem => objectItem.id !== vehicleId) || [];
      if(logLevel >= 2) console.log(' --> clientWriteQueryVehicleRemove - objectsWithRemoved:', objectsWithRemoved);
      return cacheWriteQueryVehicleObjects({ apolloClient, variables, data: objectsWithRemoved });
    };
    

      // Query Fetch Helper
      //
      export type QueryVehicleByIdApolloQueryResult = ApolloQueryResult<QueryVehicleByIdQuery>;
      export type QueryVehicleByIdApolloQueryHelperResultEx = QueryVehicleByIdApolloQueryResult & VehicleByIdHelperResultEx;

      async function queryVehicleById({ apolloClient, vehicleId, options }: { apolloClient: ApolloClient<object>, vehicleId: string, options?: Omit<QueryOptions<QueryVehicleByIdQueryVariables>, 'query' | 'variables'> }): Promise<QueryVehicleByIdApolloQueryHelperResultEx> {
        const query: QueryVehicleByIdApolloQueryResult = await apolloClient.query<QueryVehicleByIdQuery>({ query: QueryVehicleByIdDocument, variables: { vehicleId }, ...options });
        
        return { ...query, vehicle: query?.data?.vehicle_by_pk }
      }

      // Query Watch ById Helper
      //
      export type WatchQueryVehicleByIdApolloObservableQuery = ObservableQuery<QueryVehicleByIdQuery>;
      async function watchQueryVehicleById({ apolloClient, options }: { apolloClient: ApolloClient<object>, options: Omit<QueryOptions<QueryVehicleByIdQueryVariables>, 'query'> }) : Promise<WatchQueryVehicleByIdApolloObservableQuery> {
        return apolloClient.watchQuery<QueryVehicleByIdQuery>({ query: QueryVehicleByIdDocument, ...options });
      }
    

      // Query Fetch Objects Helper
      //
      export type QueryVehicleObjectsObjectsApolloQueryResult = ApolloQueryResult<QueryVehicleObjectsQuery>;
      export type QueryVehicleObjectsObjectsApolloQueryResultEx = QueryVehicleObjectsObjectsApolloQueryResult & VehicleObjectsHelperResultEx;

      async function queryVehicleObjects({ apolloClient, options }: { apolloClient: ApolloClient<object>, options: Omit<QueryOptions<QueryVehicleObjectsQueryVariables>, 'query'> }): Promise<QueryVehicleObjectsObjectsApolloQueryResultEx> {
        const query: QueryVehicleObjectsObjectsApolloQueryResult = await apolloClient.query<QueryVehicleObjectsQuery>({ query: QueryVehicleObjectsDocument, ...options });
        
        return { ...query, objects: query?.data?.vehicle || [] }
      }

      // Query Watch Objects Helper
      //
      export type WatchQueryVehicleObjectsApolloObservableQuery = ObservableQuery<QueryVehicleObjectsQuery>;
      async function watchQueryVehicleObjects({ apolloClient, options }: { apolloClient: ApolloClient<object>, options: Omit<QueryOptions<QueryVehicleObjectsQueryVariables>, 'query'> }) : Promise<WatchQueryVehicleObjectsApolloObservableQuery> {
        return apolloClient.watchQuery<QueryVehicleObjectsQuery>({ query: QueryVehicleObjectsDocument, ...options });
      }
    

    // Subscription Fetch ById Helper
    //
    export type SubscribeToVehicleByIdSubscriptionFetchResult = FetchResult<SubscribeToVehicleByIdSubscription, Record<string, any>, Record<string, any>>;
    export type SubscribeToVehicleByIdSubscriptionFetchResultEx = FetchResult<SubscribeToVehicleByIdSubscription, Record<string, any>, Record<string, any>> & VehicleByIdHelperResultEx;
    
    async function subscribeToVehicleById({ apolloClient, vehicleId, options }: { apolloClient: ApolloClient<object>, vehicleId:string, options?: Omit<SubscriptionOptions<SubscribeToVehicleByIdSubscriptionVariables>, 'query' | 'variables'> }): Promise<Observable<SubscribeToVehicleByIdSubscriptionFetchResultEx>> {
      const subscription:Observable<SubscribeToVehicleByIdSubscriptionFetchResult> = apolloClient.subscribe<SubscribeToVehicleByIdSubscription>({ query: SubscribeToVehicleByIdDocument, variables: { vehicleId }, ...options });
      
      return subscription.map(value => {return { context:value.context, errors:value.errors, data:value.data, extensions:value.extensions, vehicle:value?.data?.vehicle_by_pk || [] }  as SubscribeToVehicleByIdSubscriptionFetchResultEx }) ;
    }
    

      // Subscription Fetch Objects Helper
      //
      export type SubscribeToVehicleObjectsSubscriptionFetchResult = FetchResult<SubscribeToVehicleObjectsSubscription, Record<string, any>, Record<string, any>>;
      export type SubscribeToVehicleObjectsSubscriptionFetchResultEx = FetchResult<SubscribeToVehicleObjectsSubscription, Record<string, any>, Record<string, any>> & VehicleObjectsHelperResultEx;

      async function subscribeToVehicleObjects({ apolloClient, options }: { apolloClient: ApolloClient<object>, options?: Omit<SubscriptionOptions<SubscribeToVehicleObjectsSubscriptionVariables>, 'query'> }): Promise<Observable<SubscribeToVehicleObjectsSubscriptionFetchResultEx>> {
        const subscription:Observable<SubscribeToVehicleObjectsSubscriptionFetchResult> = apolloClient.subscribe<SubscribeToVehicleObjectsSubscription>({ query: SubscribeToVehicleObjectsDocument, ...options });
        
        return subscription.map(value => {return { context:value.context, errors:value.errors, data:value.data, extensions:value.extensions, objects: value?.data?.vehicle || [] }  as SubscribeToVehicleObjectsSubscriptionFetchResultEx }) ;
      }
    

    // Insert Helper
    //
    type InsertVehicleFetchResult = FetchResult<InsertVehicleMutation, Record<string, any>, Record<string, any>>;
    export type InsertVehicleFetchHelperResultEx = InsertVehicleFetchResult & VehicleByIdHelperResultEx;

    async function insertVehicle({ apolloClient, vehicle, autoOptimisticResponse, options } :{ apolloClient: ApolloClient<object>, vehicle: Vehicle_Insert_Input, autoOptimisticResponse?:boolean, options?: Omit<MutationOptions<InsertVehicleMutation, InsertVehicleMutationVariables>, 'mutation' | 'variables'> }): Promise<InsertVehicleFetchHelperResultEx> {
      const objectForInsert = stripInsertInputClientFields({ input: vehicle });
      const mutationOptions:MutationOptions<InsertVehicleMutation, InsertVehicleMutationVariables> = { mutation: InsertVehicleDocument, variables: { objects: [objectForInsert] }, ...options };
      if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ 
        if(!objectForInsert.id) throw new Error(`if autoOptimisticResponse = true, id must be set in object 'vehicle'`); 
        mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<InsertVehicleMutation>({ operationType: 'insert', entityName:'vehicle', objects:[objectForInsert as Vehicle_Insert_Input & ObjectWithId] }); 
        if(logLevel >= 2) console.log(' --> insertVehicle - optimisticResponse:', mutationOptions.optimisticResponse);
      }
      
      const mutation:InsertVehicleFetchResult = await apolloClient.mutate<InsertVehicleMutation, InsertVehicleMutationVariables>(mutationOptions);
        
      return { ...mutation, vehicle: mutation?.data?.insert_vehicle?.returning && mutation.data.insert_vehicle.returning[0] };
    }

    async function insertVehicleWithOnConflict({ apolloClient, vehicle, onConflict, autoOptimisticResponse, options } :{ apolloClient: ApolloClient<object>, vehicle: Vehicle_Insert_Input, onConflict: Vehicle_On_Conflict, autoOptimisticResponse?:boolean, options?: Omit<MutationOptions<InsertVehicleMutation, InsertVehicleMutationVariables>, 'mutation' | 'variables'> }): Promise<InsertVehicleFetchHelperResultEx> {
      const objectForInsert = stripInsertInputClientFields({ input: vehicle });
      const mutationOptions:MutationOptions<InsertVehicleMutation, InsertVehicleWithOnConflictMutationVariables> = { mutation: InsertVehicleDocument, variables: { objects: [objectForInsert], onConflict }, ...options };
      if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ 
        if(!objectForInsert.id) throw new Error(`if autoOptimisticResponse = true, id must be set in object 'vehicle'`); 
        mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<InsertVehicleMutation>({ operationType: 'insert', entityName:'vehicle', objects:[objectForInsert as Vehicle_Insert_Input & ObjectWithId] }); 
        if(logLevel >= 2) console.log(' --> insertVehicleWithOnConflict - optimisticResponse:', mutationOptions.optimisticResponse);
      }
      
      const mutation:InsertVehicleFetchResult = await apolloClient.mutate<InsertVehicleMutation, InsertVehicleWithOnConflictMutationVariables>(mutationOptions);
        
      return { ...mutation, vehicle: mutation?.data?.insert_vehicle?.returning && mutation.data.insert_vehicle.returning[0] };
    }



  

    // Insert Objects Helper
    //
    type InsertVehicleObjectsFetchResult = FetchResult<InsertVehicleMutation, Record<string, any>, Record<string, any>>;
    export type InsertVehicleObjectsHelperResultEx = InsertVehicleObjectsFetchResult & VehicleObjectsHelperResultEx;

    async function insertVehicleObjects({ apolloClient, options }:{ apolloClient: ApolloClient<object>, options: Omit<MutationOptions<InsertVehicleMutation, InsertVehicleMutationVariables>, 'mutation'> }): Promise<InsertVehicleObjectsHelperResultEx> {
      const mutation: InsertVehicleObjectsFetchResult = await apolloClient.mutate<InsertVehicleMutation, InsertVehicleMutationVariables>({ mutation: InsertVehicleDocument, ...options });
       
      return { ...mutation, objects: mutation?.data?.insert_vehicle?.returning || [] };
    }
  

    // Update Helper
    //
    type UpdateVehicleByIdQueryResult = FetchResult<UpdateVehicleByIdMutation, Record<string, any>, Record<string, any>>;
    export type UpdateVehicleByIdHelperResultEx = UpdateVehicleByIdQueryResult & VehicleByIdHelperResultEx;

    async function updateVehicleById({ apolloClient, vehicleId, set, autoOptimisticResponse, options }: { apolloClient: ApolloClient<object>, vehicleId: string, set: Vehicle_Set_Input, autoOptimisticResponse?:boolean, options?: Omit<MutationOptions<UpdateVehicleByIdMutation, UpdateVehicleByIdMutationVariables>, 'mutation'> }): Promise<UpdateVehicleByIdHelperResultEx> {
      const mutationOptions:MutationOptions<UpdateVehicleByIdMutation, UpdateVehicleByIdMutationVariables> = { mutation: UpdateVehicleByIdDocument, variables: { id:vehicleId, set }, ...options };
      if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ 
        mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<UpdateVehicleByIdMutation>({ operationType: 'update', entityName:'vehicle', objects:[{ id:vehicleId, ...set }] }); 
        if(logLevel >= 2) console.log(' --> updateVehicleById - optimisticResponse:', mutationOptions.optimisticResponse);
      }

      const mutation:UpdateVehicleByIdQueryResult = await apolloClient.mutate<UpdateVehicleByIdMutation, UpdateVehicleByIdMutationVariables>(mutationOptions);
        
      return { ...mutation, vehicle: mutation?.data?.update_vehicle?.returning && mutation.data.update_vehicle.returning[0] };
    }
  

    // Update Objects Helper
    //
    type UpdateVehicleObjectsFetchResult = FetchResult<UpdateVehicleMutation, Record<string, any>, Record<string, any>>;
    export type UpdateVehicleObjectsHelperResultEx = UpdateVehicleObjectsFetchResult & VehicleObjectsHelperResultEx;

    async function updateVehicleObjects({ apolloClient, options }: { apolloClient: ApolloClient<object>, options: Omit<MutationOptions<UpdateVehicleMutation, UpdateVehicleMutationVariables>, 'mutation'> }): Promise<UpdateVehicleObjectsHelperResultEx> {  
      const mutation:UpdateVehicleObjectsFetchResult = await apolloClient.mutate<UpdateVehicleMutation, UpdateVehicleMutationVariables>({ mutation: UpdateVehicleDocument, ...options } );
        
      return { ...mutation, objects:mutation?.data?.update_vehicle?.returning || [] };
    }
  
  

    // Delete Helper
    //

    type RemoveVehicleModelByIdQueryResult = FetchResult<RemoveVehicleModelByIdMutation, Record<string, any>, Record<string, any>>;
    export type RemoveVehicleModelByIdQueryHelperResultEx = RemoveVehicleModelByIdQueryResult & RemoveEntitiesQueryHelperResultEx;
  
    async function removeVehicleModelById({ apolloClient, vehicleId, autoOptimisticResponse, options } :{ apolloClient: ApolloClient<object>, vehicleId: string, autoOptimisticResponse?:boolean, options?: Omit<MutationOptions<RemoveVehicleModelByIdMutation, RemoveVehicleModelByIdMutationVariables>, 'mutation'> }): Promise<RemoveVehicleModelByIdQueryHelperResultEx> {
      const mutationOptions:MutationOptions<RemoveVehicleModelByIdMutation, RemoveVehicleModelByIdMutationVariables> = { mutation: RemoveVehicleModelByIdDocument, variables: { id:vehicleId, }, ...options };
      if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ 
        mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<RemoveVehicleModelByIdMutation>({ operationType: 'delete', entityName:'vehicle', objects:[{ id:vehicleId }] }); 
        if(logLevel >= 2) console.log(' --> removeVehicleModelById - optimisticResponse:', mutationOptions.optimisticResponse);
      }
      if((!options || !options.update)){ mutationOptions.update = generateUpdateFunctionForMutation<RemoveVehicleModelByIdMutation>({ operationType: 'delete', entityName:'vehicle', entityId:vehicleId }); }
      
      const mutation:RemoveVehicleModelByIdQueryResult = await apolloClient.mutate<RemoveVehicleModelByIdMutation, RemoveVehicleModelByIdMutationVariables>(mutationOptions);
    
      return { ...mutation, affected_rows: mutation?.data?.delete_vehicle?.affected_rows || 0 };
    }
  

    type RemoveVehicleModelObjectsQueryResult = FetchResult<RemoveVehicleModelMutation, Record<string, any>, Record<string, any>>;
    export type RemoveVehicleModelObjectsQueryHelperResultEx = RemoveVehicleModelObjectsQueryResult & RemoveEntitiesQueryHelperResultEx;  
  
    async function removeVehicleModelObjects({ apolloClient, options }:{ apolloClient: ApolloClient<object>, options: Omit<MutationOptions<RemoveVehicleModelMutation, RemoveVehicleModelMutationVariables>, 'mutation'> }): Promise<RemoveVehicleModelObjectsQueryHelperResultEx> {  
        const mutation:RemoveVehicleModelByIdQueryResult = await apolloClient.mutate<RemoveVehicleModelMutation, RemoveVehicleModelMutationVariables>({ mutation: RemoveVehicleModelDocument, ...options } );
          
        return { ...mutation, affected_rows: mutation?.data?.delete_vehicle?.affected_rows || 0 };
      }
  

    // Vehicle Fragment Helper Object
    //------------------------------------------------

    export const VehicleFragmentGQLHelper = {
      clientReadFragmentById: clientReadFragmentVehicleById,
      clientWriteFragmentById: clientWriteFragmentVehicleById,
      cacheWriteFragmentById: cacheWriteFragmentVehicleById,
      clientReadQueryById: clientReadQueryVehicleById,
      clientWriteQueryById: clientWriteQueryVehicleById,
      cacheWriteQueryById: cacheWriteQueryVehicleById,
      clientReadQueryObjects: clientReadQueryVehicleObjects,
      clientWriteQueryObjects: clientWriteQueryVehicleObjects,
      cacheWriteQueryObjects: cacheWriteQueryVehicleObjects,
      clientWriteQueryInsert: clientWriteQueryVehicleInsert,
      cacheWriteQueryInsert: cacheWriteQueryVehicleInsert,
      clientWriteQueryRemove: clientWriteQueryVehicleRemove,
      cacheWriteQueryRemove: cacheWriteQueryVehicleRemove,
      queryById: queryVehicleById,
      queryObjects: queryVehicleObjects,
      watchQueryById: watchQueryVehicleById,
      watchQueryObjects: watchQueryVehicleObjects,
      subscribeToById: subscribeToVehicleById,
      subscribeToObjects: subscribeToVehicleObjects,
      insert: insertVehicle,
      insertWithOnConflict: insertVehicleWithOnConflict,
      insertObjects: insertVehicleObjects,
      updateById: updateVehicleById,
      updateObjects: updateVehicleObjects
    }
  

    // vehicle Entity Helper Object
    //------------------------------------------------

    export const VehicleModelGQLHelper = {
      removeById: removeVehicleModelById,
      removeObjects: removeVehicleModelObjects,
    }
  

    // vehicle HELPERS
    //------------------------------------------------

    export type VehicleLocationOnlyByIdHelperResultEx = { vehicleLocationOnly:VehicleLocationOnlyFragment | null | undefined };
    export type VehicleLocationOnlyObjectsHelperResultEx = { objects:VehicleLocationOnlyFragment[] };
    
  

    // Direct Client & Cache Fragment Helpers
    //
    function clientReadFragmentVehicleLocationOnlyById({ apolloClient, vehicleId}: { apolloClient: ApolloClient<object>, vehicleId: string }): VehicleLocationOnlyFragment | null | undefined {
      return apolloClient.readFragment<VehicleLocationOnlyFragment | null | undefined>({ fragment: VehicleLocationOnlyFragmentDoc, fragmentName:'VehicleLocationOnly', id: defaultDataIdFromObject({ __typename: 'vehicle', id:vehicleId }) });
    }

    function clientWriteFragmentVehicleLocationOnlyById({ apolloClient, vehicleId, vehicleLocationOnlyPartial, fieldMap }: { apolloClient: ApolloClient<object>, vehicleId: string, vehicleLocationOnlyPartial: Partial<VehicleLocationOnlyFragment> | Vehicle_Insert_Input | null, fieldMap?: FieldMap<string> }): Partial<VehicleLocationOnlyFragment> {
      const parsedFragment = convertToGraph({ input:vehicleLocationOnlyPartial, typename:'vehicle', fieldMap });
      if(logLevel >= 2) console.log(' --> cacheWriteFragmentVehicleLocationOnlyById - vehicleLocationOnlyPartial:', vehicleLocationOnlyPartial);
      apolloClient.writeFragment<Partial<VehicleLocationOnlyFragment> | null>({ fragment: VehicleLocationOnlyFragmentDoc, fragmentName:'VehicleLocationOnly', id: defaultDataIdFromObject({ ...parsedFragment, id:vehicleId }), data: parsedFragment });
      return parsedFragment;
    }

    function cacheWriteFragmentVehicleLocationOnlyById({ apolloClient, vehicleId, vehicleLocationOnlyPartial, fieldMap }: { apolloClient: ApolloClient<object>, vehicleId: string, vehicleLocationOnlyPartial: Partial<VehicleLocationOnlyFragment> | Vehicle_Insert_Input | null, fieldMap?: FieldMap<string> }): Partial<VehicleLocationOnlyFragment> {
      const parsedFragment = convertToGraph({ input:vehicleLocationOnlyPartial, typename:'vehicle', fieldMap });
      if(logLevel >= 2) console.log(' --> cacheWriteFragmentVehicleLocationOnlyById - vehicleLocationOnlyPartial:', vehicleLocationOnlyPartial);
      apolloClient.cache.writeFragment<Partial<VehicleLocationOnlyFragment> | null>({ fragment: VehicleLocationOnlyFragmentDoc, fragmentName:'VehicleLocationOnly', id: defaultDataIdFromObject({ ...parsedFragment, id:vehicleId }), data: parsedFragment });
      return parsedFragment;
    }

    function clientReadQueryVehicleLocationOnlyById({ apolloClient, vehicleId}: { apolloClient: ApolloClient<object>, vehicleId: string }): VehicleLocationOnlyFragment | null | undefined {
      return apolloClient.readQuery<VehicleLocationOnlyFragment | null >({ query: QueryVehicleLocationOnlyByIdDocument, variables: { vehicleId }  });
    }

    function clientWriteQueryVehicleLocationOnlyById({ apolloClient, vehicleId, vehicleLocationOnly, fieldMap }: { apolloClient: ApolloClient<object>, vehicleId: string, vehicleLocationOnly: VehicleLocationOnlyFragment | Vehicle_Insert_Input | null, fieldMap?: FieldMap<string> }): void {
      const vehicleLocationOnlyPartial = convertToGraph({ input:vehicleLocationOnly, typename:'vehicle', fieldMap });
      return apolloClient.writeQuery<VehicleLocationOnlyFragment | null>({ query: QueryVehicleLocationOnlyByIdDocument, variables: { vehicleId }, data: (vehicleLocationOnly ? vehicleLocationOnlyPartial : null) });
    }

    function cacheWriteQueryVehicleLocationOnlyById({ apolloClient, vehicleId, vehicleLocationOnly, fieldMap }: { apolloClient: ApolloClient<object>, vehicleId: string, vehicleLocationOnly: VehicleLocationOnlyFragment | Vehicle_Insert_Input | null, fieldMap?: FieldMap<string> }): void {
      const vehicleLocationOnlyPartial = convertToGraph({ input:vehicleLocationOnly, typename:'vehicle', fieldMap });
      return apolloClient.cache.writeQuery<VehicleLocationOnlyFragment | null>({ query: QueryVehicleLocationOnlyByIdDocument, variables: { vehicleId }, data: (vehicleLocationOnly ? vehicleLocationOnlyPartial : null) });
    }
    
    function clientReadQueryVehicleLocationOnlyObjects({ apolloClient, variables }: { apolloClient: ApolloClient<object>, variables: QueryVehicleLocationOnlyObjectsQueryVariables }): Vehicle[] | null | undefined {
      return apolloClient.readQuery<{Vehicle:Vehicle[] | null}>({ query: QueryVehicleLocationOnlyObjectsDocument, variables })?.Vehicle || [];
    }

    function clientWriteQueryVehicleLocationOnlyObjects({ apolloClient, variables, data, fieldMap }: { apolloClient: ApolloClient<object>, variables: QueryVehicleLocationOnlyObjectsQueryVariables, data:(Vehicle | Vehicle_Insert_Input)[], fieldMap?: FieldMap<string> }): void {
      const objects = convertToGraph({ input:data, typename:'vehicle', fieldMap });
      return apolloClient.writeQuery<{Vehicle:Vehicle[]}>({ query: QueryVehicleLocationOnlyObjectsDocument, variables, data: { Vehicle:objects } });
    }

    function cacheWriteQueryVehicleLocationOnlyObjects({ apolloClient, variables, data, fieldMap }: { apolloClient: ApolloClient<object>, variables: QueryVehicleLocationOnlyObjectsQueryVariables, data:(Vehicle | Vehicle_Insert_Input)[], fieldMap?: FieldMap<string> }): void {
      const objects = convertToGraph({ input:data, typename:'vehicle', fieldMap });
      return apolloClient.cache.writeQuery<{Vehicle:Vehicle[]}>({ query: QueryVehicleLocationOnlyObjectsDocument, variables, data: { Vehicle:objects } });
    }

    function clientWriteQueryVehicleLocationOnlyInsert({ apolloClient, variables, vehicle, fieldMap }: { apolloClient: ApolloClient<object>, variables: QueryVehicleLocationOnlyObjectsQueryVariables, vehicle:Vehicle_Insert_Input, fieldMap?: FieldMap<string> }): void {
      const currentObjects = clientReadQueryVehicleLocationOnlyObjects({ apolloClient, variables }) || [];
      const objectsWithInserted = [ ...currentObjects, convertToGraph({ input: vehicle, typename:'vehicle', fieldMap })];
      if(logLevel >= 2) console.log(' --> clientWriteQueryVehicleLocationOnlyInsert - objectsWithInserted:', objectsWithInserted);
      return clientWriteQueryVehicleLocationOnlyObjects({ apolloClient, variables, data: objectsWithInserted });
    }

    function cacheWriteQueryVehicleLocationOnlyInsert({ apolloClient, variables, vehicle, fieldMap }: { apolloClient: ApolloClient<object>, variables: QueryVehicleLocationOnlyObjectsQueryVariables, vehicle:Vehicle_Insert_Input, fieldMap?: FieldMap<string> }): void {
      const currentObjects = clientReadQueryVehicleLocationOnlyObjects({ apolloClient, variables }) || [];
      const objectsWithInserted = [ ...currentObjects, convertToGraph({ input: vehicle, typename:'vehicle', fieldMap })];
      if(logLevel >= 2) console.log(' --> cacheWriteQueryVehicleLocationOnlyInsert - objectsWithInserted:', objectsWithInserted);
      return cacheWriteQueryVehicleLocationOnlyObjects({ apolloClient, variables, data: objectsWithInserted });
    }

    function clientWriteQueryVehicleLocationOnlyRemove({ apolloClient, variables, vehicleId }: { apolloClient: ApolloClient<object>, variables: QueryVehicleLocationOnlyObjectsQueryVariables, vehicleId: string }): void {
      const currentObjects = clientReadQueryVehicleLocationOnlyObjects({ apolloClient, variables }) || [];
      const objectsWithRemoved = currentObjects.filter(objectItem => objectItem.id !== vehicleId) || [];
      if(logLevel >= 2) console.log(' --> clientWriteQueryVehicleLocationOnlyRemove - objectsWithRemoved:', objectsWithRemoved);
      return clientWriteQueryVehicleLocationOnlyObjects({ apolloClient, variables, data: objectsWithRemoved });
    }

    function cacheWriteQueryVehicleLocationOnlyRemove({ apolloClient, variables, vehicleId }: { apolloClient: ApolloClient<object>, variables: QueryVehicleLocationOnlyObjectsQueryVariables, vehicleId: string }): void {
      const currentObjects = clientReadQueryVehicleLocationOnlyObjects({ apolloClient, variables }) || [];
      const objectsWithRemoved = currentObjects.filter(objectItem => objectItem.id !== vehicleId) || [];
      if(logLevel >= 2) console.log(' --> clientWriteQueryVehicleLocationOnlyRemove - objectsWithRemoved:', objectsWithRemoved);
      return cacheWriteQueryVehicleLocationOnlyObjects({ apolloClient, variables, data: objectsWithRemoved });
    };
    

      // Query Fetch Helper
      //
      export type QueryVehicleLocationOnlyByIdApolloQueryResult = ApolloQueryResult<QueryVehicleLocationOnlyByIdQuery>;
      export type QueryVehicleLocationOnlyByIdApolloQueryHelperResultEx = QueryVehicleLocationOnlyByIdApolloQueryResult & VehicleLocationOnlyByIdHelperResultEx;

      async function queryVehicleLocationOnlyById({ apolloClient, vehicleId, options }: { apolloClient: ApolloClient<object>, vehicleId: string, options?: Omit<QueryOptions<QueryVehicleLocationOnlyByIdQueryVariables>, 'query' | 'variables'> }): Promise<QueryVehicleLocationOnlyByIdApolloQueryHelperResultEx> {
        const query: QueryVehicleLocationOnlyByIdApolloQueryResult = await apolloClient.query<QueryVehicleLocationOnlyByIdQuery>({ query: QueryVehicleLocationOnlyByIdDocument, variables: { vehicleId }, ...options });
        
        return { ...query, vehicleLocationOnly: query?.data?.vehicle_by_pk }
      }

      // Query Watch ById Helper
      //
      export type WatchQueryVehicleLocationOnlyByIdApolloObservableQuery = ObservableQuery<QueryVehicleLocationOnlyByIdQuery>;
      async function watchQueryVehicleLocationOnlyById({ apolloClient, options }: { apolloClient: ApolloClient<object>, options: Omit<QueryOptions<QueryVehicleLocationOnlyByIdQueryVariables>, 'query'> }) : Promise<WatchQueryVehicleLocationOnlyByIdApolloObservableQuery> {
        return apolloClient.watchQuery<QueryVehicleLocationOnlyByIdQuery>({ query: QueryVehicleLocationOnlyByIdDocument, ...options });
      }
    

      // Query Fetch Objects Helper
      //
      export type QueryVehicleLocationOnlyObjectsObjectsApolloQueryResult = ApolloQueryResult<QueryVehicleLocationOnlyObjectsQuery>;
      export type QueryVehicleLocationOnlyObjectsObjectsApolloQueryResultEx = QueryVehicleLocationOnlyObjectsObjectsApolloQueryResult & VehicleLocationOnlyObjectsHelperResultEx;

      async function queryVehicleLocationOnlyObjects({ apolloClient, options }: { apolloClient: ApolloClient<object>, options: Omit<QueryOptions<QueryVehicleLocationOnlyObjectsQueryVariables>, 'query'> }): Promise<QueryVehicleLocationOnlyObjectsObjectsApolloQueryResultEx> {
        const query: QueryVehicleLocationOnlyObjectsObjectsApolloQueryResult = await apolloClient.query<QueryVehicleLocationOnlyObjectsQuery>({ query: QueryVehicleLocationOnlyObjectsDocument, ...options });
        
        return { ...query, objects: query?.data?.vehicle || [] }
      }

      // Query Watch Objects Helper
      //
      export type WatchQueryVehicleLocationOnlyObjectsApolloObservableQuery = ObservableQuery<QueryVehicleLocationOnlyObjectsQuery>;
      async function watchQueryVehicleLocationOnlyObjects({ apolloClient, options }: { apolloClient: ApolloClient<object>, options: Omit<QueryOptions<QueryVehicleLocationOnlyObjectsQueryVariables>, 'query'> }) : Promise<WatchQueryVehicleLocationOnlyObjectsApolloObservableQuery> {
        return apolloClient.watchQuery<QueryVehicleLocationOnlyObjectsQuery>({ query: QueryVehicleLocationOnlyObjectsDocument, ...options });
      }
    

    // Subscription Fetch ById Helper
    //
    export type SubscribeToVehicleLocationOnlyByIdSubscriptionFetchResult = FetchResult<SubscribeToVehicleLocationOnlyByIdSubscription, Record<string, any>, Record<string, any>>;
    export type SubscribeToVehicleLocationOnlyByIdSubscriptionFetchResultEx = FetchResult<SubscribeToVehicleLocationOnlyByIdSubscription, Record<string, any>, Record<string, any>> & VehicleLocationOnlyByIdHelperResultEx;
    
    async function subscribeToVehicleLocationOnlyById({ apolloClient, vehicleId, options }: { apolloClient: ApolloClient<object>, vehicleId:string, options?: Omit<SubscriptionOptions<SubscribeToVehicleLocationOnlyByIdSubscriptionVariables>, 'query' | 'variables'> }): Promise<Observable<SubscribeToVehicleLocationOnlyByIdSubscriptionFetchResultEx>> {
      const subscription:Observable<SubscribeToVehicleLocationOnlyByIdSubscriptionFetchResult> = apolloClient.subscribe<SubscribeToVehicleLocationOnlyByIdSubscription>({ query: SubscribeToVehicleLocationOnlyByIdDocument, variables: { vehicleId }, ...options });
      
      return subscription.map(value => {return { context:value.context, errors:value.errors, data:value.data, extensions:value.extensions, vehicleLocationOnly:value?.data?.vehicle_by_pk || [] }  as SubscribeToVehicleLocationOnlyByIdSubscriptionFetchResultEx }) ;
    }
    

      // Subscription Fetch Objects Helper
      //
      export type SubscribeToVehicleLocationOnlyObjectsSubscriptionFetchResult = FetchResult<SubscribeToVehicleLocationOnlyObjectsSubscription, Record<string, any>, Record<string, any>>;
      export type SubscribeToVehicleLocationOnlyObjectsSubscriptionFetchResultEx = FetchResult<SubscribeToVehicleLocationOnlyObjectsSubscription, Record<string, any>, Record<string, any>> & VehicleLocationOnlyObjectsHelperResultEx;

      async function subscribeToVehicleLocationOnlyObjects({ apolloClient, options }: { apolloClient: ApolloClient<object>, options?: Omit<SubscriptionOptions<SubscribeToVehicleLocationOnlyObjectsSubscriptionVariables>, 'query'> }): Promise<Observable<SubscribeToVehicleLocationOnlyObjectsSubscriptionFetchResultEx>> {
        const subscription:Observable<SubscribeToVehicleLocationOnlyObjectsSubscriptionFetchResult> = apolloClient.subscribe<SubscribeToVehicleLocationOnlyObjectsSubscription>({ query: SubscribeToVehicleLocationOnlyObjectsDocument, ...options });
        
        return subscription.map(value => {return { context:value.context, errors:value.errors, data:value.data, extensions:value.extensions, objects: value?.data?.vehicle || [] }  as SubscribeToVehicleLocationOnlyObjectsSubscriptionFetchResultEx }) ;
      }
    

    // Insert Helper
    //
    type InsertVehicleLocationOnlyFetchResult = FetchResult<InsertVehicleLocationOnlyMutation, Record<string, any>, Record<string, any>>;
    export type InsertVehicleLocationOnlyFetchHelperResultEx = InsertVehicleLocationOnlyFetchResult & VehicleLocationOnlyByIdHelperResultEx;

    async function insertVehicleLocationOnly({ apolloClient, vehicle, autoOptimisticResponse, options } :{ apolloClient: ApolloClient<object>, vehicle: Vehicle_Insert_Input, autoOptimisticResponse?:boolean, options?: Omit<MutationOptions<InsertVehicleLocationOnlyMutation, InsertVehicleLocationOnlyMutationVariables>, 'mutation' | 'variables'> }): Promise<InsertVehicleLocationOnlyFetchHelperResultEx> {
      const objectForInsert = stripInsertInputClientFields({ input: vehicle });
      const mutationOptions:MutationOptions<InsertVehicleLocationOnlyMutation, InsertVehicleLocationOnlyMutationVariables> = { mutation: InsertVehicleLocationOnlyDocument, variables: { objects: [objectForInsert] }, ...options };
      if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ 
        if(!objectForInsert.id) throw new Error(`if autoOptimisticResponse = true, id must be set in object 'vehicle'`); 
        mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<InsertVehicleLocationOnlyMutation>({ operationType: 'insert', entityName:'vehicle', objects:[objectForInsert as Vehicle_Insert_Input & ObjectWithId] }); 
        if(logLevel >= 2) console.log(' --> insertVehicleLocationOnly - optimisticResponse:', mutationOptions.optimisticResponse);
      }
      
      const mutation:InsertVehicleLocationOnlyFetchResult = await apolloClient.mutate<InsertVehicleLocationOnlyMutation, InsertVehicleLocationOnlyMutationVariables>(mutationOptions);
        
      return { ...mutation, vehicleLocationOnly: mutation?.data?.insert_vehicle?.returning && mutation.data.insert_vehicle.returning[0] };
    }

    async function insertVehicleLocationOnlyWithOnConflict({ apolloClient, vehicle, onConflict, autoOptimisticResponse, options } :{ apolloClient: ApolloClient<object>, vehicle: Vehicle_Insert_Input, onConflict: Vehicle_On_Conflict, autoOptimisticResponse?:boolean, options?: Omit<MutationOptions<InsertVehicleLocationOnlyMutation, InsertVehicleLocationOnlyMutationVariables>, 'mutation' | 'variables'> }): Promise<InsertVehicleLocationOnlyFetchHelperResultEx> {
      const objectForInsert = stripInsertInputClientFields({ input: vehicle });
      const mutationOptions:MutationOptions<InsertVehicleLocationOnlyMutation, InsertVehicleLocationOnlyWithOnConflictMutationVariables> = { mutation: InsertVehicleLocationOnlyDocument, variables: { objects: [objectForInsert], onConflict }, ...options };
      if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ 
        if(!objectForInsert.id) throw new Error(`if autoOptimisticResponse = true, id must be set in object 'vehicle'`); 
        mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<InsertVehicleLocationOnlyMutation>({ operationType: 'insert', entityName:'vehicle', objects:[objectForInsert as Vehicle_Insert_Input & ObjectWithId] }); 
        if(logLevel >= 2) console.log(' --> insertVehicleLocationOnlyWithOnConflict - optimisticResponse:', mutationOptions.optimisticResponse);
      }
      
      const mutation:InsertVehicleLocationOnlyFetchResult = await apolloClient.mutate<InsertVehicleLocationOnlyMutation, InsertVehicleLocationOnlyWithOnConflictMutationVariables>(mutationOptions);
        
      return { ...mutation, vehicleLocationOnly: mutation?.data?.insert_vehicle?.returning && mutation.data.insert_vehicle.returning[0] };
    }



  

    // Insert Objects Helper
    //
    type InsertVehicleLocationOnlyObjectsFetchResult = FetchResult<InsertVehicleLocationOnlyMutation, Record<string, any>, Record<string, any>>;
    export type InsertVehicleLocationOnlyObjectsHelperResultEx = InsertVehicleLocationOnlyObjectsFetchResult & VehicleLocationOnlyObjectsHelperResultEx;

    async function insertVehicleLocationOnlyObjects({ apolloClient, options }:{ apolloClient: ApolloClient<object>, options: Omit<MutationOptions<InsertVehicleLocationOnlyMutation, InsertVehicleLocationOnlyMutationVariables>, 'mutation'> }): Promise<InsertVehicleLocationOnlyObjectsHelperResultEx> {
      const mutation: InsertVehicleLocationOnlyObjectsFetchResult = await apolloClient.mutate<InsertVehicleLocationOnlyMutation, InsertVehicleLocationOnlyMutationVariables>({ mutation: InsertVehicleLocationOnlyDocument, ...options });
       
      return { ...mutation, objects: mutation?.data?.insert_vehicle?.returning || [] };
    }
  

    // Update Helper
    //
    type UpdateVehicleLocationOnlyByIdQueryResult = FetchResult<UpdateVehicleLocationOnlyByIdMutation, Record<string, any>, Record<string, any>>;
    export type UpdateVehicleLocationOnlyByIdHelperResultEx = UpdateVehicleLocationOnlyByIdQueryResult & VehicleLocationOnlyByIdHelperResultEx;

    async function updateVehicleLocationOnlyById({ apolloClient, vehicleId, set, autoOptimisticResponse, options }: { apolloClient: ApolloClient<object>, vehicleId: string, set: Vehicle_Set_Input, autoOptimisticResponse?:boolean, options?: Omit<MutationOptions<UpdateVehicleLocationOnlyByIdMutation, UpdateVehicleLocationOnlyByIdMutationVariables>, 'mutation'> }): Promise<UpdateVehicleLocationOnlyByIdHelperResultEx> {
      const mutationOptions:MutationOptions<UpdateVehicleLocationOnlyByIdMutation, UpdateVehicleLocationOnlyByIdMutationVariables> = { mutation: UpdateVehicleLocationOnlyByIdDocument, variables: { id:vehicleId, set }, ...options };
      if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ 
        mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<UpdateVehicleLocationOnlyByIdMutation>({ operationType: 'update', entityName:'vehicle', objects:[{ id:vehicleId, ...set }] }); 
        if(logLevel >= 2) console.log(' --> updateVehicleLocationOnlyById - optimisticResponse:', mutationOptions.optimisticResponse);
      }

      const mutation:UpdateVehicleLocationOnlyByIdQueryResult = await apolloClient.mutate<UpdateVehicleLocationOnlyByIdMutation, UpdateVehicleLocationOnlyByIdMutationVariables>(mutationOptions);
        
      return { ...mutation, vehicleLocationOnly: mutation?.data?.update_vehicle?.returning && mutation.data.update_vehicle.returning[0] };
    }
  

    // Update Objects Helper
    //
    type UpdateVehicleLocationOnlyObjectsFetchResult = FetchResult<UpdateVehicleLocationOnlyMutation, Record<string, any>, Record<string, any>>;
    export type UpdateVehicleLocationOnlyObjectsHelperResultEx = UpdateVehicleLocationOnlyObjectsFetchResult & VehicleLocationOnlyObjectsHelperResultEx;

    async function updateVehicleLocationOnlyObjects({ apolloClient, options }: { apolloClient: ApolloClient<object>, options: Omit<MutationOptions<UpdateVehicleLocationOnlyMutation, UpdateVehicleLocationOnlyMutationVariables>, 'mutation'> }): Promise<UpdateVehicleLocationOnlyObjectsHelperResultEx> {  
      const mutation:UpdateVehicleLocationOnlyObjectsFetchResult = await apolloClient.mutate<UpdateVehicleLocationOnlyMutation, UpdateVehicleLocationOnlyMutationVariables>({ mutation: UpdateVehicleLocationOnlyDocument, ...options } );
        
      return { ...mutation, objects:mutation?.data?.update_vehicle?.returning || [] };
    }
  

    // VehicleLocationOnly Fragment Helper Object
    //------------------------------------------------

    export const VehicleLocationOnlyFragmentGQLHelper = {
      clientReadFragmentById: clientReadFragmentVehicleLocationOnlyById,
      clientWriteFragmentById: clientWriteFragmentVehicleLocationOnlyById,
      cacheWriteFragmentById: cacheWriteFragmentVehicleLocationOnlyById,
      clientReadQueryById: clientReadQueryVehicleLocationOnlyById,
      clientWriteQueryById: clientWriteQueryVehicleLocationOnlyById,
      cacheWriteQueryById: cacheWriteQueryVehicleLocationOnlyById,
      clientReadQueryObjects: clientReadQueryVehicleLocationOnlyObjects,
      clientWriteQueryObjects: clientWriteQueryVehicleLocationOnlyObjects,
      cacheWriteQueryObjects: cacheWriteQueryVehicleLocationOnlyObjects,
      clientWriteQueryInsert: clientWriteQueryVehicleLocationOnlyInsert,
      cacheWriteQueryInsert: cacheWriteQueryVehicleLocationOnlyInsert,
      clientWriteQueryRemove: clientWriteQueryVehicleLocationOnlyRemove,
      cacheWriteQueryRemove: cacheWriteQueryVehicleLocationOnlyRemove,
      queryById: queryVehicleLocationOnlyById,
      queryObjects: queryVehicleLocationOnlyObjects,
      watchQueryById: watchQueryVehicleLocationOnlyById,
      watchQueryObjects: watchQueryVehicleLocationOnlyObjects,
      subscribeToById: subscribeToVehicleLocationOnlyById,
      subscribeToObjects: subscribeToVehicleLocationOnlyObjects,
      insert: insertVehicleLocationOnly,
      insertWithOnConflict: insertVehicleLocationOnlyWithOnConflict,
      insertObjects: insertVehicleLocationOnlyObjects,
      updateById: updateVehicleLocationOnlyById,
      updateObjects: updateVehicleLocationOnlyObjects
    }
  

    // dogs HELPERS
    //------------------------------------------------

    export type DogByIdHelperResultEx = { dog:DogFragment | null | undefined };
    export type DogObjectsHelperResultEx = { objects:DogFragment[] };
    
  

    // Direct Client & Cache Fragment Helpers
    //
    function clientReadFragmentDogById({ apolloClient, dogsId}: { apolloClient: ApolloClient<object>, dogsId: string }): DogFragment | null | undefined {
      return apolloClient.readFragment<DogFragment | null | undefined>({ fragment: DogFragmentDoc, fragmentName:'Dog', id: defaultDataIdFromObject({ __typename: 'dogs', id:dogsId }) });
    }

    function clientWriteFragmentDogById({ apolloClient, dogsId, dogPartial, fieldMap }: { apolloClient: ApolloClient<object>, dogsId: string, dogPartial: Partial<DogFragment> | Dogs_Insert_Input | null, fieldMap?: FieldMap<string> }): Partial<DogFragment> {
      const parsedFragment = convertToGraph({ input:dogPartial, typename:'dogs', fieldMap });
      if(logLevel >= 2) console.log(' --> cacheWriteFragmentDogById - dogPartial:', dogPartial);
      apolloClient.writeFragment<Partial<DogFragment> | null>({ fragment: DogFragmentDoc, fragmentName:'Dog', id: defaultDataIdFromObject({ ...parsedFragment, id:dogsId }), data: parsedFragment });
      return parsedFragment;
    }

    function cacheWriteFragmentDogById({ apolloClient, dogsId, dogPartial, fieldMap }: { apolloClient: ApolloClient<object>, dogsId: string, dogPartial: Partial<DogFragment> | Dogs_Insert_Input | null, fieldMap?: FieldMap<string> }): Partial<DogFragment> {
      const parsedFragment = convertToGraph({ input:dogPartial, typename:'dogs', fieldMap });
      if(logLevel >= 2) console.log(' --> cacheWriteFragmentDogById - dogPartial:', dogPartial);
      apolloClient.cache.writeFragment<Partial<DogFragment> | null>({ fragment: DogFragmentDoc, fragmentName:'Dog', id: defaultDataIdFromObject({ ...parsedFragment, id:dogsId }), data: parsedFragment });
      return parsedFragment;
    }

    function clientReadQueryDogById({ apolloClient, dogsId}: { apolloClient: ApolloClient<object>, dogsId: string }): DogFragment | null | undefined {
      return apolloClient.readQuery<DogFragment | null >({ query: QueryDogByIdDocument, variables: { dogsId }  });
    }

    function clientWriteQueryDogById({ apolloClient, dogsId, dog, fieldMap }: { apolloClient: ApolloClient<object>, dogsId: string, dog: DogFragment | Dogs_Insert_Input | null, fieldMap?: FieldMap<string> }): void {
      const dogPartial = convertToGraph({ input:dog, typename:'dogs', fieldMap });
      return apolloClient.writeQuery<DogFragment | null>({ query: QueryDogByIdDocument, variables: { dogsId }, data: (dog ? dogPartial : null) });
    }

    function cacheWriteQueryDogById({ apolloClient, dogsId, dog, fieldMap }: { apolloClient: ApolloClient<object>, dogsId: string, dog: DogFragment | Dogs_Insert_Input | null, fieldMap?: FieldMap<string> }): void {
      const dogPartial = convertToGraph({ input:dog, typename:'dogs', fieldMap });
      return apolloClient.cache.writeQuery<DogFragment | null>({ query: QueryDogByIdDocument, variables: { dogsId }, data: (dog ? dogPartial : null) });
    }
    
    function clientReadQueryDogObjects({ apolloClient, variables }: { apolloClient: ApolloClient<object>, variables: QueryDogObjectsQueryVariables }): Dogs[] | null | undefined {
      return apolloClient.readQuery<{Dogs:Dogs[] | null}>({ query: QueryDogObjectsDocument, variables })?.Dogs || [];
    }

    function clientWriteQueryDogObjects({ apolloClient, variables, data, fieldMap }: { apolloClient: ApolloClient<object>, variables: QueryDogObjectsQueryVariables, data:(Dogs | Dogs_Insert_Input)[], fieldMap?: FieldMap<string> }): void {
      const objects = convertToGraph({ input:data, typename:'dogs', fieldMap });
      return apolloClient.writeQuery<{Dogs:Dogs[]}>({ query: QueryDogObjectsDocument, variables, data: { Dogs:objects } });
    }

    function cacheWriteQueryDogObjects({ apolloClient, variables, data, fieldMap }: { apolloClient: ApolloClient<object>, variables: QueryDogObjectsQueryVariables, data:(Dogs | Dogs_Insert_Input)[], fieldMap?: FieldMap<string> }): void {
      const objects = convertToGraph({ input:data, typename:'dogs', fieldMap });
      return apolloClient.cache.writeQuery<{Dogs:Dogs[]}>({ query: QueryDogObjectsDocument, variables, data: { Dogs:objects } });
    }

    function clientWriteQueryDogInsert({ apolloClient, variables, dogs, fieldMap }: { apolloClient: ApolloClient<object>, variables: QueryDogObjectsQueryVariables, dogs:Dogs_Insert_Input, fieldMap?: FieldMap<string> }): void {
      const currentObjects = clientReadQueryDogObjects({ apolloClient, variables }) || [];
      const objectsWithInserted = [ ...currentObjects, convertToGraph({ input: dogs, typename:'dogs', fieldMap })];
      if(logLevel >= 2) console.log(' --> clientWriteQueryDogInsert - objectsWithInserted:', objectsWithInserted);
      return clientWriteQueryDogObjects({ apolloClient, variables, data: objectsWithInserted });
    }

    function cacheWriteQueryDogInsert({ apolloClient, variables, dogs, fieldMap }: { apolloClient: ApolloClient<object>, variables: QueryDogObjectsQueryVariables, dogs:Dogs_Insert_Input, fieldMap?: FieldMap<string> }): void {
      const currentObjects = clientReadQueryDogObjects({ apolloClient, variables }) || [];
      const objectsWithInserted = [ ...currentObjects, convertToGraph({ input: dogs, typename:'dogs', fieldMap })];
      if(logLevel >= 2) console.log(' --> cacheWriteQueryDogInsert - objectsWithInserted:', objectsWithInserted);
      return cacheWriteQueryDogObjects({ apolloClient, variables, data: objectsWithInserted });
    }

    function clientWriteQueryDogRemove({ apolloClient, variables, dogsId }: { apolloClient: ApolloClient<object>, variables: QueryDogObjectsQueryVariables, dogsId: string }): void {
      const currentObjects = clientReadQueryDogObjects({ apolloClient, variables }) || [];
      const objectsWithRemoved = currentObjects.filter(objectItem => objectItem.id !== dogsId) || [];
      if(logLevel >= 2) console.log(' --> clientWriteQueryDogRemove - objectsWithRemoved:', objectsWithRemoved);
      return clientWriteQueryDogObjects({ apolloClient, variables, data: objectsWithRemoved });
    }

    function cacheWriteQueryDogRemove({ apolloClient, variables, dogsId }: { apolloClient: ApolloClient<object>, variables: QueryDogObjectsQueryVariables, dogsId: string }): void {
      const currentObjects = clientReadQueryDogObjects({ apolloClient, variables }) || [];
      const objectsWithRemoved = currentObjects.filter(objectItem => objectItem.id !== dogsId) || [];
      if(logLevel >= 2) console.log(' --> clientWriteQueryDogRemove - objectsWithRemoved:', objectsWithRemoved);
      return cacheWriteQueryDogObjects({ apolloClient, variables, data: objectsWithRemoved });
    };
    

      // Query Fetch Helper
      //
      export type QueryDogByIdApolloQueryResult = ApolloQueryResult<QueryDogByIdQuery>;
      export type QueryDogByIdApolloQueryHelperResultEx = QueryDogByIdApolloQueryResult & DogByIdHelperResultEx;

      async function queryDogById({ apolloClient, dogsId, options }: { apolloClient: ApolloClient<object>, dogsId: string, options?: Omit<QueryOptions<QueryDogByIdQueryVariables>, 'query' | 'variables'> }): Promise<QueryDogByIdApolloQueryHelperResultEx> {
        const query: QueryDogByIdApolloQueryResult = await apolloClient.query<QueryDogByIdQuery>({ query: QueryDogByIdDocument, variables: { dogsId }, ...options });
        
        return { ...query, dog: query?.data?.dogs_by_pk }
      }

      // Query Watch ById Helper
      //
      export type WatchQueryDogByIdApolloObservableQuery = ObservableQuery<QueryDogByIdQuery>;
      async function watchQueryDogById({ apolloClient, options }: { apolloClient: ApolloClient<object>, options: Omit<QueryOptions<QueryDogByIdQueryVariables>, 'query'> }) : Promise<WatchQueryDogByIdApolloObservableQuery> {
        return apolloClient.watchQuery<QueryDogByIdQuery>({ query: QueryDogByIdDocument, ...options });
      }
    

      // Query Fetch Objects Helper
      //
      export type QueryDogObjectsObjectsApolloQueryResult = ApolloQueryResult<QueryDogObjectsQuery>;
      export type QueryDogObjectsObjectsApolloQueryResultEx = QueryDogObjectsObjectsApolloQueryResult & DogObjectsHelperResultEx;

      async function queryDogObjects({ apolloClient, options }: { apolloClient: ApolloClient<object>, options: Omit<QueryOptions<QueryDogObjectsQueryVariables>, 'query'> }): Promise<QueryDogObjectsObjectsApolloQueryResultEx> {
        const query: QueryDogObjectsObjectsApolloQueryResult = await apolloClient.query<QueryDogObjectsQuery>({ query: QueryDogObjectsDocument, ...options });
        
        return { ...query, objects: query?.data?.dogs || [] }
      }

      // Query Watch Objects Helper
      //
      export type WatchQueryDogObjectsApolloObservableQuery = ObservableQuery<QueryDogObjectsQuery>;
      async function watchQueryDogObjects({ apolloClient, options }: { apolloClient: ApolloClient<object>, options: Omit<QueryOptions<QueryDogObjectsQueryVariables>, 'query'> }) : Promise<WatchQueryDogObjectsApolloObservableQuery> {
        return apolloClient.watchQuery<QueryDogObjectsQuery>({ query: QueryDogObjectsDocument, ...options });
      }
    

    // Subscription Fetch ById Helper
    //
    export type SubscribeToDogByIdSubscriptionFetchResult = FetchResult<SubscribeToDogByIdSubscription, Record<string, any>, Record<string, any>>;
    export type SubscribeToDogByIdSubscriptionFetchResultEx = FetchResult<SubscribeToDogByIdSubscription, Record<string, any>, Record<string, any>> & DogByIdHelperResultEx;
    
    async function subscribeToDogById({ apolloClient, dogsId, options }: { apolloClient: ApolloClient<object>, dogsId:string, options?: Omit<SubscriptionOptions<SubscribeToDogByIdSubscriptionVariables>, 'query' | 'variables'> }): Promise<Observable<SubscribeToDogByIdSubscriptionFetchResultEx>> {
      const subscription:Observable<SubscribeToDogByIdSubscriptionFetchResult> = apolloClient.subscribe<SubscribeToDogByIdSubscription>({ query: SubscribeToDogByIdDocument, variables: { dogsId }, ...options });
      
      return subscription.map(value => {return { context:value.context, errors:value.errors, data:value.data, extensions:value.extensions, dog:value?.data?.dogs_by_pk || [] }  as SubscribeToDogByIdSubscriptionFetchResultEx }) ;
    }
    

      // Subscription Fetch Objects Helper
      //
      export type SubscribeToDogObjectsSubscriptionFetchResult = FetchResult<SubscribeToDogObjectsSubscription, Record<string, any>, Record<string, any>>;
      export type SubscribeToDogObjectsSubscriptionFetchResultEx = FetchResult<SubscribeToDogObjectsSubscription, Record<string, any>, Record<string, any>> & DogObjectsHelperResultEx;

      async function subscribeToDogObjects({ apolloClient, options }: { apolloClient: ApolloClient<object>, options?: Omit<SubscriptionOptions<SubscribeToDogObjectsSubscriptionVariables>, 'query'> }): Promise<Observable<SubscribeToDogObjectsSubscriptionFetchResultEx>> {
        const subscription:Observable<SubscribeToDogObjectsSubscriptionFetchResult> = apolloClient.subscribe<SubscribeToDogObjectsSubscription>({ query: SubscribeToDogObjectsDocument, ...options });
        
        return subscription.map(value => {return { context:value.context, errors:value.errors, data:value.data, extensions:value.extensions, objects: value?.data?.dogs || [] }  as SubscribeToDogObjectsSubscriptionFetchResultEx }) ;
      }
    

    // Insert Helper
    //
    type InsertDogFetchResult = FetchResult<InsertDogMutation, Record<string, any>, Record<string, any>>;
    export type InsertDogFetchHelperResultEx = InsertDogFetchResult & DogByIdHelperResultEx;

    async function insertDog({ apolloClient, dogs, autoOptimisticResponse, options } :{ apolloClient: ApolloClient<object>, dogs: Dogs_Insert_Input, autoOptimisticResponse?:boolean, options?: Omit<MutationOptions<InsertDogMutation, InsertDogMutationVariables>, 'mutation' | 'variables'> }): Promise<InsertDogFetchHelperResultEx> {
      const objectForInsert = stripInsertInputClientFields({ input: dogs });
      const mutationOptions:MutationOptions<InsertDogMutation, InsertDogMutationVariables> = { mutation: InsertDogDocument, variables: { objects: [objectForInsert] }, ...options };
      if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ 
        if(!objectForInsert.id) throw new Error(`if autoOptimisticResponse = true, id must be set in object 'dogs'`); 
        mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<InsertDogMutation>({ operationType: 'insert', entityName:'dogs', objects:[objectForInsert as Dogs_Insert_Input & ObjectWithId] }); 
        if(logLevel >= 2) console.log(' --> insertDog - optimisticResponse:', mutationOptions.optimisticResponse);
      }
      
      const mutation:InsertDogFetchResult = await apolloClient.mutate<InsertDogMutation, InsertDogMutationVariables>(mutationOptions);
        
      return { ...mutation, dog: mutation?.data?.insert_dogs?.returning && mutation.data.insert_dogs.returning[0] };
    }

    async function insertDogWithOnConflict({ apolloClient, dogs, onConflict, autoOptimisticResponse, options } :{ apolloClient: ApolloClient<object>, dogs: Dogs_Insert_Input, onConflict: Dogs_On_Conflict, autoOptimisticResponse?:boolean, options?: Omit<MutationOptions<InsertDogMutation, InsertDogMutationVariables>, 'mutation' | 'variables'> }): Promise<InsertDogFetchHelperResultEx> {
      const objectForInsert = stripInsertInputClientFields({ input: dogs });
      const mutationOptions:MutationOptions<InsertDogMutation, InsertDogWithOnConflictMutationVariables> = { mutation: InsertDogDocument, variables: { objects: [objectForInsert], onConflict }, ...options };
      if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ 
        if(!objectForInsert.id) throw new Error(`if autoOptimisticResponse = true, id must be set in object 'dogs'`); 
        mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<InsertDogMutation>({ operationType: 'insert', entityName:'dogs', objects:[objectForInsert as Dogs_Insert_Input & ObjectWithId] }); 
        if(logLevel >= 2) console.log(' --> insertDogWithOnConflict - optimisticResponse:', mutationOptions.optimisticResponse);
      }
      
      const mutation:InsertDogFetchResult = await apolloClient.mutate<InsertDogMutation, InsertDogWithOnConflictMutationVariables>(mutationOptions);
        
      return { ...mutation, dog: mutation?.data?.insert_dogs?.returning && mutation.data.insert_dogs.returning[0] };
    }



  

    // Insert Objects Helper
    //
    type InsertDogObjectsFetchResult = FetchResult<InsertDogMutation, Record<string, any>, Record<string, any>>;
    export type InsertDogObjectsHelperResultEx = InsertDogObjectsFetchResult & DogObjectsHelperResultEx;

    async function insertDogObjects({ apolloClient, options }:{ apolloClient: ApolloClient<object>, options: Omit<MutationOptions<InsertDogMutation, InsertDogMutationVariables>, 'mutation'> }): Promise<InsertDogObjectsHelperResultEx> {
      const mutation: InsertDogObjectsFetchResult = await apolloClient.mutate<InsertDogMutation, InsertDogMutationVariables>({ mutation: InsertDogDocument, ...options });
       
      return { ...mutation, objects: mutation?.data?.insert_dogs?.returning || [] };
    }
  

    // Update Helper
    //
    type UpdateDogByIdQueryResult = FetchResult<UpdateDogByIdMutation, Record<string, any>, Record<string, any>>;
    export type UpdateDogByIdHelperResultEx = UpdateDogByIdQueryResult & DogByIdHelperResultEx;

    async function updateDogById({ apolloClient, dogsId, set, autoOptimisticResponse, options }: { apolloClient: ApolloClient<object>, dogsId: string, set: Dogs_Set_Input, autoOptimisticResponse?:boolean, options?: Omit<MutationOptions<UpdateDogByIdMutation, UpdateDogByIdMutationVariables>, 'mutation'> }): Promise<UpdateDogByIdHelperResultEx> {
      const mutationOptions:MutationOptions<UpdateDogByIdMutation, UpdateDogByIdMutationVariables> = { mutation: UpdateDogByIdDocument, variables: { id:dogsId, set }, ...options };
      if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ 
        mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<UpdateDogByIdMutation>({ operationType: 'update', entityName:'dogs', objects:[{ id:dogsId, ...set }] }); 
        if(logLevel >= 2) console.log(' --> updateDogById - optimisticResponse:', mutationOptions.optimisticResponse);
      }

      const mutation:UpdateDogByIdQueryResult = await apolloClient.mutate<UpdateDogByIdMutation, UpdateDogByIdMutationVariables>(mutationOptions);
        
      return { ...mutation, dog: mutation?.data?.update_dogs?.returning && mutation.data.update_dogs.returning[0] };
    }
  

    // Update Objects Helper
    //
    type UpdateDogObjectsFetchResult = FetchResult<UpdateDogMutation, Record<string, any>, Record<string, any>>;
    export type UpdateDogObjectsHelperResultEx = UpdateDogObjectsFetchResult & DogObjectsHelperResultEx;

    async function updateDogObjects({ apolloClient, options }: { apolloClient: ApolloClient<object>, options: Omit<MutationOptions<UpdateDogMutation, UpdateDogMutationVariables>, 'mutation'> }): Promise<UpdateDogObjectsHelperResultEx> {  
      const mutation:UpdateDogObjectsFetchResult = await apolloClient.mutate<UpdateDogMutation, UpdateDogMutationVariables>({ mutation: UpdateDogDocument, ...options } );
        
      return { ...mutation, objects:mutation?.data?.update_dogs?.returning || [] };
    }
  
  

    // Delete Helper
    //

    type RemoveDogsModelByIdQueryResult = FetchResult<RemoveDogsModelByIdMutation, Record<string, any>, Record<string, any>>;
    export type RemoveDogsModelByIdQueryHelperResultEx = RemoveDogsModelByIdQueryResult & RemoveEntitiesQueryHelperResultEx;
  
    async function removeDogsModelById({ apolloClient, dogsId, autoOptimisticResponse, options } :{ apolloClient: ApolloClient<object>, dogsId: string, autoOptimisticResponse?:boolean, options?: Omit<MutationOptions<RemoveDogsModelByIdMutation, RemoveDogsModelByIdMutationVariables>, 'mutation'> }): Promise<RemoveDogsModelByIdQueryHelperResultEx> {
      const mutationOptions:MutationOptions<RemoveDogsModelByIdMutation, RemoveDogsModelByIdMutationVariables> = { mutation: RemoveDogsModelByIdDocument, variables: { id:dogsId, }, ...options };
      if(autoOptimisticResponse && (!options || !options.optimisticResponse)){ 
        mutationOptions.optimisticResponse = generateOptimisticResponseForMutation<RemoveDogsModelByIdMutation>({ operationType: 'delete', entityName:'dogs', objects:[{ id:dogsId }] }); 
        if(logLevel >= 2) console.log(' --> removeDogsModelById - optimisticResponse:', mutationOptions.optimisticResponse);
      }
      if((!options || !options.update)){ mutationOptions.update = generateUpdateFunctionForMutation<RemoveDogsModelByIdMutation>({ operationType: 'delete', entityName:'dogs', entityId:dogsId }); }
      
      const mutation:RemoveDogsModelByIdQueryResult = await apolloClient.mutate<RemoveDogsModelByIdMutation, RemoveDogsModelByIdMutationVariables>(mutationOptions);
    
      return { ...mutation, affected_rows: mutation?.data?.delete_dogs?.affected_rows || 0 };
    }
  

    type RemoveDogsModelObjectsQueryResult = FetchResult<RemoveDogsModelMutation, Record<string, any>, Record<string, any>>;
    export type RemoveDogsModelObjectsQueryHelperResultEx = RemoveDogsModelObjectsQueryResult & RemoveEntitiesQueryHelperResultEx;  
  
    async function removeDogsModelObjects({ apolloClient, options }:{ apolloClient: ApolloClient<object>, options: Omit<MutationOptions<RemoveDogsModelMutation, RemoveDogsModelMutationVariables>, 'mutation'> }): Promise<RemoveDogsModelObjectsQueryHelperResultEx> {  
        const mutation:RemoveDogsModelByIdQueryResult = await apolloClient.mutate<RemoveDogsModelMutation, RemoveDogsModelMutationVariables>({ mutation: RemoveDogsModelDocument, ...options } );
          
        return { ...mutation, affected_rows: mutation?.data?.delete_dogs?.affected_rows || 0 };
      }
  

    // Dog Fragment Helper Object
    //------------------------------------------------

    export const DogFragmentGQLHelper = {
      clientReadFragmentById: clientReadFragmentDogById,
      clientWriteFragmentById: clientWriteFragmentDogById,
      cacheWriteFragmentById: cacheWriteFragmentDogById,
      clientReadQueryById: clientReadQueryDogById,
      clientWriteQueryById: clientWriteQueryDogById,
      cacheWriteQueryById: cacheWriteQueryDogById,
      clientReadQueryObjects: clientReadQueryDogObjects,
      clientWriteQueryObjects: clientWriteQueryDogObjects,
      cacheWriteQueryObjects: cacheWriteQueryDogObjects,
      clientWriteQueryInsert: clientWriteQueryDogInsert,
      cacheWriteQueryInsert: cacheWriteQueryDogInsert,
      clientWriteQueryRemove: clientWriteQueryDogRemove,
      cacheWriteQueryRemove: cacheWriteQueryDogRemove,
      queryById: queryDogById,
      queryObjects: queryDogObjects,
      watchQueryById: watchQueryDogById,
      watchQueryObjects: watchQueryDogObjects,
      subscribeToById: subscribeToDogById,
      subscribeToObjects: subscribeToDogObjects,
      insert: insertDog,
      insertWithOnConflict: insertDogWithOnConflict,
      insertObjects: insertDogObjects,
      updateById: updateDogById,
      updateObjects: updateDogObjects
    }
  

    // dogs Entity Helper Object
    //------------------------------------------------

    export const DogsModelGQLHelper = {
      removeById: removeDogsModelById,
      removeObjects: removeDogsModelObjects,
    }
  

    // COMBINED HELPER OBJECT
    //------------------------------------------------
    export const GQLHelpers = {
      Fragments: {
        Vehicle: VehicleFragmentGQLHelper,
        VehicleLocationOnly: VehicleLocationOnlyFragmentGQLHelper,
        Dog: DogFragmentGQLHelper
      },
      Models: {
        Vehicle: VehicleModelGQLHelper,
        Dogs: DogsModelGQLHelper
      }
    }
  