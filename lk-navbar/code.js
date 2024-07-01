$(document).ready(function() {
    $('li.is_only_col_name').each(function() {
        var $firstAnchor = $(this).find('a').first();
        if ($firstAnchor.length) {
            var anchorText = $firstAnchor.text();
            $firstAnchor.replaceWith('<span>' + anchorText + '</span>');
        }
    });
});
