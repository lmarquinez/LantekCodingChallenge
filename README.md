# Lantek Coding Challenge

The task is to create an application that displays the existing cutting machines. The list of cutting machines must be obtained by querying the above API. The following information should be displayed for each machine:
- Name
- Manufacturer

## Technical questions

1. How long did you spend on the coding test? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.

I've spent 2 hours doing this coding test. Where I've spent the most time is on the testing, looking for information, due to it's the first time I do testing with Angular and Jasmine. So, I would like to improve the test including more cases, because I think it could be developed more deeply. Also instead of a machines table, I would like to design some cards for the machines that are display. But first, I would like to learn more about testing with this technologies. 

2. What was the most useful feature added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

-- The use of components, each one being independent. I have created three components, one for the header, other one for the list of machines and last one, for the footer. 
```ng g c folderName/componentName```

```sh
            ng generate component components/header 
            ng generate component components/machines-list 
            ng generate component components/footer 
```

-- The asynchronous functions, using ```AWAIT``` to wait for the result of the promise, which is the list of machines we get from the API. Once it is resolved, it restart the execution of the function with ```ASYNC``` and returns the resolved value.

```sh
    async ngOnInit(): Promise<void> {
            try {
            this.arrMachines = await this.machineService.getAllMachines();
            }
            catch (err: any) {
                console.log(err.error);
            }
        }
```
-- Use of structural directives, such as ```*ngFor```. With this directive you can iterate over the array of machines received. This way, the data of each machine, can be display on the table.

```sh
            <tr *ngFor="let machine of arrMachines">
                <td>{{machine?.name}}</td>
                <td>{{machine?.manufacturer}}</td>
            </tr>
```
3. How would you track down a performance issue in production? Have you ever had to do this?

I have never had to do this, but I imagine that being about performance, you would have to look at the database or hardware issues.

4. How would you improve the Lantek API that you just used?

-- More data about the machines, and with the possibility of having a pagination.
-- API documentation. The API should be more complet, with more methods. For example, the use of swagger to create this type of documentation.
-- Use a token for authentication. The token provides an additional level of security for accessing the data.


## Installation

```sh
cd cuttingMachines
npm i
ng serve
```

![screencapture-localhost-4200-2023-01-31-21_35_00](https://user-images.githubusercontent.com/43243069/216023749-533969b8-d18a-400b-a50b-ad91c43e8789.png)

## Testing
```sh
ng test
```

![screencapture-localhost-9876-2023-02-01-11_10_54](https://user-images.githubusercontent.com/43243069/216023801-429af13a-68d9-40f5-8c46-09cc37de36b4.png)
