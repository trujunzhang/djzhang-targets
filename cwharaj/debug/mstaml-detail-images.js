
    "SwitchImage": function(kind, id, i) {
        // switch loading image with actual image
        var dimensions, width, height;
        dimensions = Images.GetMaxWidthDimentions(
        Images.imageMaxWidth,
        Images.items[kind][id].images[i].width,
        Images.items[kind][id].images[i].height);
        width = dimensions[0];
        height = dimensions[1];
        var originImageLink = document.getElementById('originImageLink-' + kind + '-' + id);
        if (originImageLink)
        {
            originImageLink.href = Images.uploadedPath + Images.items[kind][id].images[i].url + '&origin=1';
            originImageLink.target = '_blank';
        }
        var img = document.getElementById('image-' + kind + '-' + id);
        if (img) {
            img.src = Images.uploadedPath + Images.items[kind][id].images[i].url + '&w=' + Images.imageMaxWidth + '&h=0';
            img.width = width;
            img.height = height;
            img.alt = Images.items[kind][id].images[i].description;
            img.title = Images.items[kind][id].images[i].description;
            document.getElementById('desc-' + kind + '-' + id).innerHTML = Utils.EscapeHTML(Images.items[kind][id].images[i].description);
            document.getElementById('image-rotate-l-' + kind + '-' + id).onclick = function() {
                Images.Rotate(3, kind, id, i, -90);
            }
            ;
            document.getElementById('image-rotate-r-' + kind + '-' + id).onclick = function() {
                Images.Rotate(3, kind, id, i, 90);
            }
            ;
            Images.Rotate(3, kind, id, i);
        }
    },