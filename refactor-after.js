function renderPerson(person) {
    const result = [];
    result.push(`<p>${person.name}</p>`);
    result.push(emitPhotoData(person.photo));
    return result.join('\n');
}

function photoDiv(photo) {
    return ['<div>', emitPhotoData(photo), '</div>'].join('\n');
}

// 新函数名字改成旧函数
function emitPhotoData(aPhoto) {
    const result = [];
    result.push(`<p>title: ${aPhoto.title}</p>`); // 重复语句移入新函数中
    result.push(`<p>location: ${aPhoto.location}</p>`);
    result.push(`<p>date: ${aPhoto.date}</p>`);
    return result.join('\n');
}

module.exports = {
    renderPerson,
    photoDiv,
}
