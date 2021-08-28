///default parameter
///if not sent argue then assign default parameter
//if sent argue then not assign default parameter

function collegeName(first,last = 'Govt. College'){
    const fullName = first + ' ' + last;
    console.log(fullName);
}

collegeName('NarayaonGonj');
collegeName('PaharToli','Women College');


