

$(document).ready(function(){
    var departmentItems = {
        "CAS": ["ARNIS", "ATHLETICS", "BADMINTON", "BASKETBALL", 
                "CHESS", "FUTSAL", "ML", "SEPAK TAKRAW", "SOCCER", 
                "TABLE TENNIS", "VOLLEYBALL"],
        "CANR": ["ARNIS", "ATHLETICS", "BADMINTON", "BASKETBALL", 
                "CHESS", "FUTSAL", "ML", "SEPAK TAKRAW", "SOCCER", 
                "TABLE TENNIS", "VOLLEYBALL"],
        "COED": ["ARNIS", "ATHLETICS", "BADMINTON", "BASKETBALL", 
                "CHESS", "FUTSAL",    "ML", "SEPAK TAKRAW", "SOCCER", 
                "TABLE TENNIS", "VOLLEYBALL"],
        "COENG": ["ARNIS", "ATHLETICS", "BADMINTON", "BASKETBALL", 
                "CHESS", "FUTSAL",    "ML", "SEPAK TAKRAW", "SOCCER", 
                "TABLE TENNIS", "VOLLEYBALL"],
        "CBPA":["ARNIS", "ATHLETICS", "BADMINTON", "BASKETBALL", 
                "CHESS", "FUTSAL",    "ML", "SEPAK TAKRAW", "SOCCER", 
                "TABLE TENNIS", "VOLLEYBALL"],
        "COTT": ["ARNIS", "ATHLETICS", "BADMINTON", "BASKETBALL", 
                "CHESS", "FUTSAL",    "ML", "SEPAK TAKRAW", "SOCCER", 
                "TABLE TENNIS", "VOLLEYBALL"],
        "ICS": ["ARNIS", "ATHLETICS", "BADMINTON", "BASKETBALL", 
                "CHESS", "FUTSAL",    "ML", "SEPAK TAKRAW", "SOCCER", 
                "TABLE TENNIS", "VOLLEYBALL"],
        "IFMS": ["ARNIS", "ATHLETICS", "BADMINTON", "BASKETBALL", 
                "CHESS", "FUTSAL",    "ML", "SEPAK TAKRAW", "SOCCER", 
                "TABLE TENNIS", "VOLLEYBALL"],
        "ENTIENZA": ["ARNIS", "ATHLETICS", "BADMINTON", "BASKETBALL", 
                    "CHESS", "FUTSAL",    "ML", "SEPAK TAKRAW", "SOCCER", 
                    "TABLE TENNIS", "VOLLEYBALL"]
    };

    $("button").click(function(){
        var department = $(this).text().trim();
        var items = departmentItems[department];
        if (items) {
            displayItems(items);
        }
    });

    function displayItems(items) {
        var itemList = $("#ItemList");
        itemList.empty();
        items.forEach(function(item) {
            itemList.append("<li>" + item + "</li>");
        });
        $("#ItemListContainer").show();
    }
});