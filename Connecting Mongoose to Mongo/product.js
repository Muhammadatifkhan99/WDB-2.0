const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/shopApp")
    .then(() => {
        console.log("CONNECTION OPEN");
    })
    .catch(err => {
        console.log("ERROR");
        console.log(err);
})


///Defining the mongoose schema::::using mongoose validations
const productSchema = new mongoose.Schema({
    name: {
        type : String,
        required: true,
        maxlength: 20
    },
    price: {
        type: Number,
        required: false,
        min: 0
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: [String],
    qty: {
        online: {
            type: String,
            default: 0
        },
        inStore: {
            type: String,
            default: 0
        }
    }
})


const Product = mongoose.model('Product', productSchema);

const bike = new Product ({name: 'Bike Helmet',price: '29.3', categories: ['Cycling', 'Safey']}); //the string value can be converted to an actual number

bike.save()
    .then(data => {
        console.log("IT Worked");
        console.log(data);
    })
    .catch(err => {
        console.log("ERRoR");
        console.log(err);
        //console.log(err.errors.name.properties.message); //to get to the exact error message of the error object
        
    })
///when the validation was forced to be incorrect....here is the result

// ERRoR
// Error: Product validation failed: name: Path `name` is required.
//     at ValidationError.inspect (C:\Users\PMLS\Desktop\Code\Connecting Mongoose to Mongo\node_modules\mongoose\lib\error\validation.js:52:26)
//     at formatValue (node:internal/util/inspect:806:19)
//     at inspect (node:internal/util/inspect:365:10)
//     at formatWithOptionsInternal (node:internal/util/inspect:2304:40)
//     at formatWithOptions (node:internal/util/inspect:2166:10)
//     at console.value (node:internal/console/constructor:349:14)
//     at console.log (node:internal/console/constructor:386:61)
//     at C:\Users\PMLS\Desktop\Code\Connecting Mongoose to Mongo\product.js:37:17
//     at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
//   errors: {
//     ...................................name: ValidatorError: Path `name` is required.
//         at validate (C:\Users\PMLS\Desktop\Code\Connecting Mongoose to Mongo\node_modules\mongoose\lib\schemaType.js:1385:13)
//         at SchemaType.doValidate (C:\Users\PMLS\Desktop\Code\Connecting Mongoose to Mongo\node_modules\mongoose\lib\schemaType.js:1369:7)
//         at C:\Users\PMLS\Desktop\Code\Connecting Mongoose to Mongo\node_modules\mongoose\lib\document.js:3071:18
//         at process.processTicksAndRejections (node:internal/process/task_queues:77:11) {
//       ...........................properties: [Object],
//       ...........................kind: 'required',
//      ........................... path: 'name',
//       ...........................value: undefined,
//       ...........................reason: undefined,
//       ...........................[Symbol(mongoose#validatorError)]: true
//     }
//   },
//   ..............................._message: 'Product validation failed'
