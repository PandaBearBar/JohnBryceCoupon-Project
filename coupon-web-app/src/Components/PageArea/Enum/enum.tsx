import { CategoryModel } from "../../../Models/Coupons"

export const Categories:React.FC = () => {
    const categories = CategoryModel;
    return (
        <>
            <option selected value={''}>Categories</option>
            <option value={categories.Electricity}>{categories.Electricity}</option>
            <option value={categories.Food}>{categories.Food}</option>
            <option value={categories.Restaurant}>{categories.Restaurant}</option>
            <option value={categories.Vacation}>{categories.Vacation}</option>
        </>
    )
}
