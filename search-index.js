var N=null,E="",T="t",U="u",searchIndex={};
var R=["option","value","values","string","insert","get_mut","remove","Datetime","result","Extracts the array value if it is an array.","Extracts the table value if it is a table.","serializer","Historical versions of toml-rs accidentally allowed a…","toml::map","try_from","try_into","borrow_mut","type_id","into_iter","borrow","typeid","toml::value","to_owned","clone_into","to_string","toml::ser","toml::de","next_back","size_hint","datetime","formatter","index_mut","from_str","datetimeparseerror","description","serialize","deserialize","VacantEntry","OccupiedEntry","Serializer","Deserializer","IntoIter","DatetimeParseError"];

searchIndex["toml"]={"doc":"A [TOML]-parsing library","i":[[0,"map","toml","A map of String to toml::Value.",N,N],[3,"Map",R[13],"Represents a JSON key/value type.",N,N],[3,R[37],E,"A vacant Entry. It is part of the [`Entry`] enum.",N,N],[3,R[38],E,"An occupied Entry. It is part of the [`Entry`] enum.",N,N],[3,"Iter",E,"An iterator over a toml::Map's entries.",N,N],[3,"IterMut",E,"A mutable iterator over a toml::Map's entries.",N,N],[3,R[41],E,"An owning iterator over a toml::Map's entries.",N,N],[3,"Keys",E,"An iterator over a toml::Map's keys.",N,N],[3,"Values",E,"An iterator over a toml::Map's values.",N,N],[4,"Entry",E,"A view into a single entry in a map, which may either be…",N,N],[13,"Vacant",E,"A vacant Entry.",0,N],[13,"Occupied",E,"An occupied Entry.",0,N],[11,"new",E,"Makes a new empty Map.",1,[[],["self"]]],[11,"with_capacity",E,"Makes a new empty Map with the given initial capacity.",1,[[["usize"]],["self"]]],[11,"clear",E,"Clears the map, removing all values.",1,[[["self"]]]],[11,"get",E,"Returns a reference to the value corresponding to the key.",1,[[["self"],["q"]],[R[0],[R[1]]]]],[11,"contains_key",E,"Returns true if the map contains a value for the specified…",1,[[["self"],["q"]],["bool"]]],[11,R[5],E,"Returns a mutable reference to the value corresponding to…",1,[[["self"],["q"]],[R[0],[R[1]]]]],[11,R[4],E,"Inserts a key-value pair into the map.",1,[[["self"],[R[3]],[R[1]]],[R[0],[R[1]]]]],[11,R[6],E,"Removes a key from the map, returning the value at the key…",1,[[["self"],["q"]],[R[0],[R[1]]]]],[11,"entry",E,"Gets the given key's corresponding entry in the map for…",1,[[["self"],["s"]],["entry"]]],[11,"len",E,"Returns the number of elements in the map.",1,[[["self"]],["usize"]]],[11,"is_empty",E,"Returns true if the map contains no elements.",1,[[["self"]],["bool"]]],[11,"iter",E,"Gets an iterator over the entries of the map.",1,[[["self"]],["iter"]]],[11,"iter_mut",E,"Gets a mutable iterator over the entries of the map.",1,[[["self"]],["itermut"]]],[11,"keys",E,"Gets an iterator over the keys of the map.",1,[[["self"]],["keys"]]],[11,R[2],E,"Gets an iterator over the values of the map.",1,[[["self"]],[R[2]]]],[11,"key",E,"Returns a reference to this entry's key.",0,[[["self"]],[R[3]]]],[11,"or_insert",E,"Ensures a value is in the entry by inserting the default…",0,[[["self"],[R[1]]],[R[1]]]],[11,"or_insert_with",E,"Ensures a value is in the entry by inserting the result of…",0,[[["self"],["f"]],[R[1]]]],[11,"key",E,"Gets a reference to the key that would be used when…",2,[[["self"]],[R[3]]]],[11,R[4],E,"Sets the value of the entry with the VacantEntry's key,…",2,[[["self"],[R[1]]],[R[1]]]],[11,"key",E,"Gets a reference to the key in the entry.",3,[[["self"]],[R[3]]]],[11,"get",E,"Gets a reference to the value in the entry.",3,[[["self"]],[R[1]]]],[11,R[5],E,"Gets a mutable reference to the value in the entry.",3,[[["self"]],[R[1]]]],[11,"into_mut",E,"Converts the entry into a mutable reference to its value.",3,[[["self"]],[R[1]]]],[11,R[4],E,"Sets the value of the entry with the `OccupiedEntry`'s…",3,[[["self"],[R[1]]],[R[1]]]],[11,R[6],E,"Takes the value of the entry out of the map, and returns it.",3,[[["self"]],[R[1]]]],[0,R[1],"toml","Definition of a TOML value",N,N],[3,R[7],R[21],"A parsed TOML datetime value",N,N],[3,R[42],E,"Error returned from parsing a `Datetime` in the `FromStr`…",N,N],[4,"Value",E,"Representation of a TOML value.",N,N],[13,"String",E,"Represents a TOML string",4,N],[13,"Integer",E,"Represents a TOML integer",4,N],[13,"Float",E,"Represents a TOML float",4,N],[13,"Boolean",E,"Represents a TOML boolean",4,N],[13,R[7],E,"Represents a TOML datetime",4,N],[13,"Array",E,"Represents a TOML array",4,N],[13,"Table",E,"Represents a TOML table",4,N],[6,"Array",E,"Type representing a TOML array, payload of the…",N,N],[6,"Table",E,"Type representing a TOML table, payload of the…",N,N],[8,"Index",E,"Types that can be used to index a `toml::Value`",N,N],[11,R[14],E,"Convert a `T` into `toml::Value` which is an enum that can…",4,[[[T]],[R[8],[R[1],"error"]]]],[11,R[15],E,"Interpret a `toml::Value` as an instance of type `T`.",4,[[["self"]],[R[8],["error"]]]],[11,"get",E,"Index into a TOML array or map. A string index can be used…",4,[[["self"],["i"]],[R[0],[R[1]]]]],[11,R[5],E,"Mutably index into a TOML array or map. A string index can…",4,[[["self"],["i"]],[R[0],[R[1]]]]],[11,"as_integer",E,"Extracts the integer value if it is an integer.",4,[[["self"]],[R[0],["i64"]]]],[11,"is_integer",E,"Tests whether this value is an integer.",4,[[["self"]],["bool"]]],[11,"as_float",E,"Extracts the float value if it is a float.",4,[[["self"]],[R[0],["f64"]]]],[11,"is_float",E,"Tests whether this value is a float.",4,[[["self"]],["bool"]]],[11,"as_bool",E,"Extracts the boolean value if it is a boolean.",4,[[["self"]],[R[0],["bool"]]]],[11,"is_bool",E,"Tests whether this value is a boolean.",4,[[["self"]],["bool"]]],[11,"as_str",E,"Extracts the string of this value if it is a string.",4,[[["self"]],[R[0],["str"]]]],[11,"is_str",E,"Tests if this value is a string.",4,[[["self"]],["bool"]]],[11,"as_datetime",E,"Extracts the datetime value if it is a datetime.",4,[[["self"]],[R[0],[R[29]]]]],[11,"is_datetime",E,"Tests whether this value is a datetime.",4,[[["self"]],["bool"]]],[11,"as_array",E,R[9],4,[[["self"]],[R[0],["vec"]]]],[11,"as_array_mut",E,R[9],4,[[["self"]],[R[0],["vec"]]]],[11,"is_array",E,"Tests whether this value is an array.",4,[[["self"]],["bool"]]],[11,"as_table",E,R[10],4,[[["self"]],[R[0],["table"]]]],[11,"as_table_mut",E,R[10],4,[[["self"]],[R[0],["table"]]]],[11,"is_table",E,"Tests whether this value is a table.",4,[[["self"]],["bool"]]],[11,"same_type",E,"Tests whether this and another value have the same type.",4,[[["self"],[R[1]]],["bool"]]],[11,"type_str",E,"Returns a human-readable representation of the type of…",4,[[["self"]],["str"]]],[0,"ser","toml","Serializing Rust structures into TOML.",N,N],[3,R[39],R[25],"Serialization implementation for TOML.",N,N],[4,"Error",E,"Errors that can occur when serializing a type.",N,N],[13,"UnsupportedType",E,"Indicates that a Rust type was requested to be serialized…",5,N],[13,"KeyNotString",E,"The key of all TOML maps must be strings, but…",5,N],[13,"ArrayMixedType",E,"Arrays in TOML must have a homogenous type, but a…",5,N],[13,"ValueAfterTable",E,"All values in a TOML table must be emitted before further…",5,N],[13,"DateInvalid",E,"A serialized date was invalid.",5,N],[13,"NumberInvalid",E,"A serialized number was invalid.",5,N],[13,"UnsupportedNone",E,"None was attempted to be serialized, but it's not supported.",5,N],[13,"Custom",E,"A custom error which could be generated when serializing a…",5,N],[5,"to_vec",E,"Serialize the given data structure as a TOML byte vector.",N,[[[T]],[R[8],["vec","error"]]]],[5,R[24],E,"Serialize the given data structure as a String of TOML.",N,[[[T]],[R[8],[R[3],"error"]]]],[5,"to_string_pretty",E,"Serialize the given data structure as a \"pretty\" String of…",N,[[[T]],[R[8],[R[3],"error"]]]],[5,"tables_last",E,"Convenience function to serialize items in a map in an…",N,[[["i"],["s"]],[R[8]]]],[11,"new",E,"Creates a new serializer which will emit TOML into the…",6,[[[R[3]]],[R[11]]]],[11,"pretty",E,"Instantiate a \"pretty\" formatter",6,[[[R[3]]],[R[11]]]],[11,"pretty_string",E,"Enable or Disable pretty strings",6,[[["self"],["bool"]],["self"]]],[11,"pretty_string_literal",E,"Enable or Disable Literal strings for pretty strings",6,[[["self"],["bool"]],["self"]]],[11,"pretty_array",E,"Enable or Disable pretty arrays",6,[[["self"],["bool"]],["self"]]],[11,"pretty_array_indent",E,"Set the indent for pretty arrays",6,[[["self"],["usize"]],["self"]]],[11,"pretty_array_trailing_comma",E,"Specify whether to use a trailing comma when serializing…",6,[[["self"],["bool"]],["self"]]],[0,"de","toml","Deserializing TOML into Rust structures.",N,N],[3,"Error",R[26],"Errors that can occur when deserializing a type.",N,N],[3,R[40],E,"Deserialization implementation for TOML.",N,N],[5,"from_slice",E,"Deserializes a byte slice into a type.",N,N],[5,R[32],E,"Deserializes a string into a type.",N,[[["str"]],[R[8],["error"]]]],[11,"new",E,"Creates a new deserializer which will be deserializing the…",7,[[["str"]],["deserializer"]]],[11,"end",E,"The `Deserializer::end` method should be called after a…",7,[[["self"]],[R[8],["error"]]]],[11,"set_require_newline_after_table",E,R[12],7,[[["self"],["bool"]]]],[11,"set_allow_duplicate_after_longer_table",E,R[12],7,[[["self"],["bool"]]]],[11,"line_col",E,"Produces a (line, column) pair of the position of the…",8,[[["self"]],[R[0]]]],[14,"toml","toml","Construct a [`toml::Value`] from TOML syntax.",N,N],[11,"into",R[13],E,1,[[["self"]],[U]]],[11,R[22],E,E,1,[[["self"]],[T]]],[11,R[23],E,E,1,N],[11,R[18],E,E,1,[[["self"]],["i"]]],[11,"from",E,E,1,[[[T]],[T]]],[11,R[14],E,E,1,[[[U]],[R[8]]]],[11,R[19],E,E,1,[[["self"]],[T]]],[11,R[17],E,E,1,[[["self"]],[R[20]]]],[11,R[16],E,E,1,[[["self"]],[T]]],[11,R[15],E,E,1,[[["self"]],[R[8]]]],[11,"into",E,E,2,[[["self"]],[U]]],[11,"from",E,E,2,[[[T]],[T]]],[11,R[14],E,E,2,[[[U]],[R[8]]]],[11,R[19],E,E,2,[[["self"]],[T]]],[11,R[17],E,E,2,[[["self"]],[R[20]]]],[11,R[16],E,E,2,[[["self"]],[T]]],[11,R[15],E,E,2,[[["self"]],[R[8]]]],[11,"into",E,E,3,[[["self"]],[U]]],[11,"from",E,E,3,[[[T]],[T]]],[11,R[14],E,E,3,[[[U]],[R[8]]]],[11,R[19],E,E,3,[[["self"]],[T]]],[11,R[17],E,E,3,[[["self"]],[R[20]]]],[11,R[16],E,E,3,[[["self"]],[T]]],[11,R[15],E,E,3,[[["self"]],[R[8]]]],[11,"into",E,E,9,[[["self"]],[U]]],[11,R[18],E,E,9,[[["self"]],["i"]]],[11,"from",E,E,9,[[[T]],[T]]],[11,R[14],E,E,9,[[[U]],[R[8]]]],[11,R[19],E,E,9,[[["self"]],[T]]],[11,R[17],E,E,9,[[["self"]],[R[20]]]],[11,R[16],E,E,9,[[["self"]],[T]]],[11,R[15],E,E,9,[[["self"]],[R[8]]]],[11,"into",E,E,10,[[["self"]],[U]]],[11,R[18],E,E,10,[[["self"]],["i"]]],[11,"from",E,E,10,[[[T]],[T]]],[11,R[14],E,E,10,[[[U]],[R[8]]]],[11,R[19],E,E,10,[[["self"]],[T]]],[11,R[17],E,E,10,[[["self"]],[R[20]]]],[11,R[16],E,E,10,[[["self"]],[T]]],[11,R[15],E,E,10,[[["self"]],[R[8]]]],[11,"into",E,E,11,[[["self"]],[U]]],[11,R[18],E,E,11,[[["self"]],["i"]]],[11,"from",E,E,11,[[[T]],[T]]],[11,R[14],E,E,11,[[[U]],[R[8]]]],[11,R[19],E,E,11,[[["self"]],[T]]],[11,R[17],E,E,11,[[["self"]],[R[20]]]],[11,R[16],E,E,11,[[["self"]],[T]]],[11,R[15],E,E,11,[[["self"]],[R[8]]]],[11,"into",E,E,12,[[["self"]],[U]]],[11,R[18],E,E,12,[[["self"]],["i"]]],[11,"from",E,E,12,[[[T]],[T]]],[11,R[14],E,E,12,[[[U]],[R[8]]]],[11,R[19],E,E,12,[[["self"]],[T]]],[11,R[17],E,E,12,[[["self"]],[R[20]]]],[11,R[16],E,E,12,[[["self"]],[T]]],[11,R[15],E,E,12,[[["self"]],[R[8]]]],[11,"into",E,E,13,[[["self"]],[U]]],[11,R[18],E,E,13,[[["self"]],["i"]]],[11,"from",E,E,13,[[[T]],[T]]],[11,R[14],E,E,13,[[[U]],[R[8]]]],[11,R[19],E,E,13,[[["self"]],[T]]],[11,R[17],E,E,13,[[["self"]],[R[20]]]],[11,R[16],E,E,13,[[["self"]],[T]]],[11,R[15],E,E,13,[[["self"]],[R[8]]]],[11,"into",E,E,0,[[["self"]],[U]]],[11,"from",E,E,0,[[[T]],[T]]],[11,R[14],E,E,0,[[[U]],[R[8]]]],[11,R[19],E,E,0,[[["self"]],[T]]],[11,R[17],E,E,0,[[["self"]],[R[20]]]],[11,R[16],E,E,0,[[["self"]],[T]]],[11,R[15],E,E,0,[[["self"]],[R[8]]]],[11,"into",R[21],E,14,[[["self"]],[U]]],[11,R[22],E,E,14,[[["self"]],[T]]],[11,R[23],E,E,14,N],[11,R[24],E,E,14,[[["self"]],[R[3]]]],[11,"from",E,E,14,[[[T]],[T]]],[11,R[14],E,E,14,[[[U]],[R[8]]]],[11,R[19],E,E,14,[[["self"]],[T]]],[11,R[17],E,E,14,[[["self"]],[R[20]]]],[11,R[16],E,E,14,[[["self"]],[T]]],[11,R[15],E,E,14,[[["self"]],[R[8]]]],[11,"into",E,E,15,[[["self"]],[U]]],[11,R[22],E,E,15,[[["self"]],[T]]],[11,R[23],E,E,15,N],[11,R[24],E,E,15,[[["self"]],[R[3]]]],[11,"from",E,E,15,[[[T]],[T]]],[11,R[14],E,E,15,[[[U]],[R[8]]]],[11,R[19],E,E,15,[[["self"]],[T]]],[11,R[17],E,E,15,[[["self"]],[R[20]]]],[11,R[16],E,E,15,[[["self"]],[T]]],[11,R[15],E,E,15,[[["self"]],[R[8]]]],[11,"into",E,E,4,[[["self"]],[U]]],[11,R[22],E,E,4,[[["self"]],[T]]],[11,R[23],E,E,4,N],[11,R[24],E,E,4,[[["self"]],[R[3]]]],[11,"from",E,E,4,[[[T]],[T]]],[11,R[14],E,E,4,[[[U]],[R[8]]]],[11,R[19],E,E,4,[[["self"]],[T]]],[11,R[17],E,E,4,[[["self"]],[R[20]]]],[11,R[16],E,E,4,[[["self"]],[T]]],[11,R[15],E,E,4,[[["self"]],[R[8]]]],[11,"into",R[25],E,6,[[["self"]],[U]]],[11,"from",E,E,6,[[[T]],[T]]],[11,R[14],E,E,6,[[[U]],[R[8]]]],[11,R[19],E,E,6,[[["self"]],[T]]],[11,R[17],E,E,6,[[["self"]],[R[20]]]],[11,R[16],E,E,6,[[["self"]],[T]]],[11,R[15],E,E,6,[[["self"]],[R[8]]]],[11,"into",E,E,5,[[["self"]],[U]]],[11,R[22],E,E,5,[[["self"]],[T]]],[11,R[23],E,E,5,N],[11,R[24],E,E,5,[[["self"]],[R[3]]]],[11,"from",E,E,5,[[[T]],[T]]],[11,R[14],E,E,5,[[[U]],[R[8]]]],[11,R[19],E,E,5,[[["self"]],[T]]],[11,R[17],E,E,5,[[["self"]],[R[20]]]],[11,R[16],E,E,5,[[["self"]],[T]]],[11,R[15],E,E,5,[[["self"]],[R[8]]]],[11,"into",R[26],E,8,[[["self"]],[U]]],[11,R[22],E,E,8,[[["self"]],[T]]],[11,R[23],E,E,8,N],[11,R[24],E,E,8,[[["self"]],[R[3]]]],[11,"from",E,E,8,[[[T]],[T]]],[11,R[14],E,E,8,[[[U]],[R[8]]]],[11,R[19],E,E,8,[[["self"]],[T]]],[11,R[17],E,E,8,[[["self"]],[R[20]]]],[11,R[16],E,E,8,[[["self"]],[T]]],[11,R[15],E,E,8,[[["self"]],[R[8]]]],[11,"into",E,E,7,[[["self"]],[U]]],[11,"from",E,E,7,[[[T]],[T]]],[11,R[14],E,E,7,[[[U]],[R[8]]]],[11,R[19],E,E,7,[[["self"]],[T]]],[11,R[17],E,E,7,[[["self"]],[R[20]]]],[11,R[16],E,E,7,[[["self"]],[T]]],[11,R[15],E,E,7,[[["self"]],[R[8]]]],[11,"extend",R[13],E,1,[[["self"],[T]]]],[11,"len",E,E,9,[[["self"]],["usize"]]],[11,"len",E,E,10,[[["self"]],["usize"]]],[11,"len",E,E,11,[[["self"]],["usize"]]],[11,"len",E,E,12,[[["self"]],["usize"]]],[11,"len",E,E,13,[[["self"]],["usize"]]],[11,R[27],E,E,9,[[["self"]],[R[0]]]],[11,R[27],E,E,10,[[["self"]],[R[0]]]],[11,R[27],E,E,11,[[["self"]],[R[0]]]],[11,R[27],E,E,12,[[["self"]],[R[0]]]],[11,R[27],E,E,13,[[["self"]],[R[0]]]],[11,"next",E,E,9,[[["self"]],[R[0]]]],[11,R[28],E,E,9,N],[11,"next",E,E,10,[[["self"]],[R[0]]]],[11,R[28],E,E,10,N],[11,"next",E,E,11,[[["self"]],[R[0]]]],[11,R[28],E,E,11,N],[11,"next",E,E,12,[[["self"]],[R[0]]]],[11,R[28],E,E,12,N],[11,"next",E,E,13,[[["self"]],[R[0]]]],[11,R[28],E,E,13,N],[11,"eq",E,E,1,[[["self"],["self"]],["bool"]]],[11,"eq",R[21],E,4,[[["self"],[R[1]]],["bool"]]],[11,"ne",E,E,4,[[["self"],[R[1]]],["bool"]]],[11,"eq",E,E,14,[[["self"],[R[29]]],["bool"]]],[11,"ne",E,E,14,[[["self"],[R[29]]],["bool"]]],[11,"eq",R[25],E,5,[[["self"],["error"]],["bool"]]],[11,"ne",E,E,5,[[["self"],["error"]],["bool"]]],[11,"eq",R[26],E,8,[[["self"],["error"]],["bool"]]],[11,"ne",E,E,8,[[["self"],["error"]],["bool"]]],[11,R[18],R[13],E,1,N],[11,"default",E,E,1,[[],["self"]]],[11,"from",R[21],E,4,[[["str"]],[R[1]]]],[11,"from",E,E,4,[[["vec"]],[R[1]]]],[11,"from",E,E,4,[[["btreemap"]],[R[1]]]],[11,"from",E,E,4,[[["hashmap"]],[R[1]]]],[11,"from",E,E,4,[[[R[3]]],[R[1]]]],[11,"from",E,E,4,[[["i64"]],[R[1]]]],[11,"from",E,E,4,[[["i32"]],[R[1]]]],[11,"from",E,E,4,[[["i8"]],[R[1]]]],[11,"from",E,E,4,[[["u8"]],[R[1]]]],[11,"from",E,E,4,[[["u32"]],[R[1]]]],[11,"from",E,E,4,[[["f64"]],[R[1]]]],[11,"from",E,E,4,[[["f32"]],[R[1]]]],[11,"from",E,E,4,[[["bool"]],[R[1]]]],[11,"from",E,E,4,[[[R[29]]],[R[1]]]],[11,"clone",R[13],E,1,[[["self"]],["self"]]],[11,"clone",R[21],E,4,[[["self"]],[R[1]]]],[11,"clone",E,E,14,[[["self"]],[R[29]]]],[11,"clone",E,E,15,[[["self"]],[R[33]]]],[11,"clone",R[25],E,5,[[["self"]],["error"]]],[11,"clone",R[26],E,8,[[["self"]],["error"]]],[11,"fmt",R[21],E,4,[[["self"],[R[30]]],[R[8]]]],[11,"fmt",E,E,14,[[["self"],[R[30]]],[R[8]]]],[11,"fmt",E,E,15,[[["self"],[R[30]]],[R[8]]]],[11,"fmt",R[25],E,5,[[["self"],[R[30]]],[R[8]]]],[11,"fmt",R[26],E,8,[[["self"],[R[30]]],[R[8]]]],[11,"fmt",R[13],E,1,[[["self"],[R[30]]],[R[8],["error"]]]],[11,"fmt",R[21],E,4,[[["self"],[R[30]]],[R[8]]]],[11,"fmt",E,E,15,[[["self"],[R[30]]],[R[8]]]],[11,"fmt",E,E,14,[[["self"],[R[30]]],[R[8]]]],[11,"fmt",R[25],E,5,[[["self"],[R[30]]],[R[8]]]],[11,"fmt",R[26],E,8,[[["self"],[R[30]]],[R[8]]]],[11,"index",R[13],E,1,[[["self"],["q"]],[R[1]]]],[11,"index",R[21],E,4,[[["self"],["i"]],[R[1]]]],[11,R[31],R[13],E,1,[[["self"],["q"]],[R[1]]]],[11,R[31],R[21],E,4,[[["self"],["i"]],[R[1]]]],[11,"from_iter",R[13],E,1,[[[T]],["self"]]],[11,R[32],R[21],E,4,[[["str"]],[R[8],[R[1]]]]],[11,R[32],E,E,14,[[["str"]],[R[8],[R[29],R[33]]]]],[11,R[34],E,E,15,[[["self"]],["str"]]],[11,R[34],R[25],E,5,[[["self"]],["str"]]],[11,R[34],R[26],E,8,[[["self"]],["str"]]],[11,"into_deserializer",R[21],E,4,[[["self"]],["self"]]],[11,R[35],R[13],E,1,[[["self"],["s"]],[R[8]]]],[11,R[35],R[21],E,4,[[["self"],["s"]],[R[8]]]],[11,R[35],E,E,14,[[["self"],["s"]],[R[8]]]],[11,"custom",R[25],E,5,[[[T]],["error"]]],[11,"deserialize_any",R[21],E,4,[[["self"],["v"]],[R[8],["error"]]]],[11,"deserialize_enum",E,E,4,N],[11,"deserialize_option",E,E,4,[[["self"],["v"]],[R[8],["error"]]]],[11,"deserialize_newtype_struct",E,E,4,[[["self"],["str"],["v"]],[R[8],["error"]]]],[11,"deserialize_bool",E,E,4,[[["self"],["v"]],[R[8]]]],[11,"deserialize_u8",E,E,4,[[["self"],["v"]],[R[8]]]],[11,"deserialize_u16",E,E,4,[[["self"],["v"]],[R[8]]]],[11,"deserialize_u32",E,E,4,[[["self"],["v"]],[R[8]]]],[11,"deserialize_u64",E,E,4,[[["self"],["v"]],[R[8]]]],[11,"deserialize_i8",E,E,4,[[["self"],["v"]],[R[8]]]],[11,"deserialize_i16",E,E,4,[[["self"],["v"]],[R[8]]]],[11,"deserialize_i32",E,E,4,[[["self"],["v"]],[R[8]]]],[11,"deserialize_i64",E,E,4,[[["self"],["v"]],[R[8]]]],[11,"deserialize_f32",E,E,4,[[["self"],["v"]],[R[8]]]],[11,"deserialize_f64",E,E,4,[[["self"],["v"]],[R[8]]]],[11,"deserialize_char",E,E,4,[[["self"],["v"]],[R[8]]]],[11,"deserialize_str",E,E,4,[[["self"],["v"]],[R[8]]]],[11,"deserialize_string",E,E,4,[[["self"],["v"]],[R[8]]]],[11,"deserialize_unit",E,E,4,[[["self"],["v"]],[R[8]]]],[11,"deserialize_seq",E,E,4,[[["self"],["v"]],[R[8]]]],[11,"deserialize_bytes",E,E,4,[[["self"],["v"]],[R[8]]]],[11,"deserialize_byte_buf",E,E,4,[[["self"],["v"]],[R[8]]]],[11,"deserialize_map",E,E,4,[[["self"],["v"]],[R[8]]]],[11,"deserialize_unit_struct",E,E,4,[[["self"],["str"],["v"]],[R[8]]]],[11,"deserialize_tuple_struct",E,E,4,[[["self"],["str"],["usize"],["v"]],[R[8]]]],[11,"deserialize_struct",E,E,4,N],[11,"deserialize_tuple",E,E,4,[[["self"],["usize"],["v"]],[R[8]]]],[11,"deserialize_ignored_any",E,E,4,[[["self"],["v"]],[R[8]]]],[11,"deserialize_identifier",E,E,4,[[["self"],["v"]],[R[8]]]],[11,R[36],R[13],E,1,[[["d"]],[R[8]]]],[11,R[36],R[21],E,4,[[["d"]],[R[8],[R[1]]]]],[11,R[36],E,E,14,[[["d"]],[R[8],[R[29]]]]],[11,"custom",R[26],E,8,[[[T]],["error"]]]],"p":[[4,"Entry"],[3,"Map"],[3,R[37]],[3,R[38]],[4,"Value"],[4,"Error"],[3,R[39]],[3,R[40]],[3,"Error"],[3,"Iter"],[3,"IterMut"],[3,R[41]],[3,"Keys"],[3,"Values"],[3,R[7]],[3,R[42]]]};
initSearch(searchIndex);addSearchOptions(searchIndex);